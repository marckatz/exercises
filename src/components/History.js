import React, {Children, useEffect, useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "./WorkoutForm";

function History(){
    const [history, setHistory] = useState([])

    function addWorkout(workoutObj){
        fetch('http://localhost:3001/workouts/',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(workoutObj)
        })
        .then(r=>r.json())
        .then(workout => setHistory(h => [...h, workout]))
        
    }

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => setHistory(w))
    }, [])

    const workoutList = history.map(w => {
        return <Workout id={w.id} key={w.id} exercises={w.exercises} date={w.date} time={w.time} duration={w.duration} />
    })

    return (
        <div>
            <h2>Example History</h2>
            {workoutList}
            <WorkoutForm addWorkout={addWorkout}/>
        </div>
    )
}

export default History