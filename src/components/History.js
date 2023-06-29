import React, {useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

function History(){
    const [history, setHistory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => {setHistory(w)})
    }, [])

    const workoutList = history.map(w => {
        return <WorkoutCard key={w.id} workout={w} />
    })

    return (
        <div className="workout-container">
            <h2>Example History</h2>
            <div className="workout-grid">{workoutList}</div>
        </div>
    )
}

export default History