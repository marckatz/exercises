import React from "react";
import Profile from "./Profile";
import WorkoutData from "./db.json"
import WorkoutCard from "./WorkoutCard"

function Home(){

    const workouts = WorkoutData.workouts

    const renderWorkouts = workouts.map((workout) => (
        <WorkoutCard
        key={workout.id}
        workout={workout}
        exercises={workout.exercises}
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