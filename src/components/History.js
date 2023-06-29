import React, {Children, useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

function History(){
    const [history, setHistory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => {setHistory(w)})
    }, [])

    function moveToFavorites (id){
        console.log(id)
    }

    const workoutList = Children.toArray(history.map(w => {
        return <WorkoutCard workout={w} handleMove={moveToFavorites}/>
    }))

    return (
        <div className="workout-container">
            <h2>Example History</h2>
            <button>sample button</button>
            <div className="workout-grid">{workoutList}</div>
            <li className="card">
      <div className="details">
      </div>
    </li>
        </div>
    )
}

export default History