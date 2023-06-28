import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import WorkoutCard from "./WorkoutCard"

function Home(){

    const [workouts, setWorkouts] = useState([])
    const [profile, setProfile] = useState({name:""})

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => setWorkouts(w))
        fetch('http://localhost:3001/profile/')
        .then(r => r.json())
        .then(p => setProfile({name:p.name}))
    },[])

    const renderWorkouts = workouts.slice(0,3).map((workout) => (
        <WorkoutCard
        key={workout.id}
        workout={workout}
        />
    ))

    const totalWorkouts = workouts.length

    return (
        <div>
            <Profile workouts={workouts} profile={profile}/>
            <h1>Most Recent Workouts:</h1>
            <div className="workout-grid">{renderWorkouts}</div>
        </div>
    )
}

export default Home