import React, {useEffect, useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "./WorkoutForm";

function History(){
    const [history, setHistory] = useState([])

    function addWorkout(name){
        return 0
    }

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => console.log(w))
    }, [])

    return (
        <div>
            <h2>Example History</h2>
            {history}
            <WorkoutForm addWorkout={addWorkout}/>
        </div>
    )
}

export default History