import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import WorkoutCard from "./WorkoutCard"

function Home(){

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => setWorkouts(w))

    })

    const renderWorkouts = workouts.map((workout) => (
        <WorkoutCard
        key={workout.id}
        workout={workout}
        />
    ))
    return (
        <div>
            <Profile />
            <h1>Sample Workouts</h1>
            <div className="workout-grid">{renderWorkouts}</div>
        </div>
    )
}

export default Home