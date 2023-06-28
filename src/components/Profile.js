import React, { useEffect, useState } from "react";
import Modal from './Modal';
import profileData from "./db.json";

function Profile({workouts, profile}) {
    const [openModal, setOpenModal] = useState(false);

    const name = profile.name;
    const totalWorkouts = workouts.length;

    function getWorkoutsThisWeek() {
        const workouts = profileData.workouts;
        let workoutsThisWeek = 0
        const lastSunday = new Date()
        lastSunday.setDate(lastSunday.getDate() - lastSunday.getDay())
        workouts.forEach(workout => {
            const workoutDate = new Date(workout.date)
            if(workoutDate > lastSunday){
                workoutsThisWeek++
            }
        })
        return workoutsThisWeek
    }

    function hasWorkoutOnDate(date, listOfDates){
        for(const d of listOfDates){
            if(d - date === 0){
                return true
            }
        }
        return false
    }

    function getWorkoutStreak(){
        let yesterday = new Date()
        yesterday = new Date(yesterday.getFullYear()+"-"+(yesterday.getMonth()+1)+"-"+yesterday.getDate())
        yesterday.setDate(yesterday.getDate()-1)
        const listOfDates = workouts.map(workout => new Date(workout.date))
        let streak = 0
        while(streak < workouts.length){
            if(hasWorkoutOnDate(yesterday, listOfDates)){
                streak++
                yesterday.setDate(yesterday.getDate()-1)
            }
            else{
                break
            }
        }
        return streak
    }

    const handleBeginWorkout = () => {
        setOpenModal(true);
    };

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
        <p className="subheading">Streak: {getWorkoutStreak()}</p>
        <p className="subheading">Total Workouts: {totalWorkouts}</p>
        <p className="subheading">Workouts Per Week: {getWorkoutsThisWeek()}</p>
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
