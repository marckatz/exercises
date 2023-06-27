import React, { useEffect, useState } from "react";
import Modal from './Modal';
import profileData from "./db.json";

function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState(0);

  const { name } = profileData.profile[0];
  const totalWorkouts = profileData.workouts.length;

  useEffect(() => {
    const workoutsThisWeek = getWorkoutsThisWeek();
    setWorkoutsPerWeek(workoutsThisWeek.length);
  }, []);

  function getWorkoutsThisWeek() {
    const workouts = profileData.workouts;
    const currentDate = new Date();
    const startOfWeek = getStartOfWeek(currentDate);
    const endOfWeek = getEndOfWeek(currentDate);

    const workoutsThisWeek = workouts.filter((workout) => {
      const workoutDate = new Date(workout.date);
      return workoutDate >= startOfWeek && workoutDate <= endOfWeek;
    });

    return workoutsThisWeek;
  }

  function getStartOfWeek(date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
    const startOfWeek = new Date(date.setDate(diff));
    startOfWeek.setHours(0, 0, 0, 0);
    return startOfWeek;
  }

  function getEndOfWeek(date) {
    const startOfWeek = getStartOfWeek(date);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    return endOfWeek;
  }

  const handleBeginWorkout = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="profile-card">
        <h2 className="profile">Profile</h2>
        <p className="subheading">Name: {name}</p>
        <p className="subheading">Streak: </p>
        <p className="subheading">Total Workouts: {totalWorkouts}</p>
        <p className="subheading">Workouts Per Week: {workoutsPerWeek}</p>
      </div>
      <div className="button-div">
        <button onClick={handleBeginWorkout} className="button-main" >Begin Workout</button>
        <Modal 
          open={openModal} 
          onClose={() => setOpenModal(false)} 
        />
      </div>
    </div>
  );
}

export default Profile;
