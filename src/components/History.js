import React, {useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "./WorkoutForm";

function History(){
    const [history, setHistory] = useState([])
    const [nextID, setNextID] = useState(0)

    function addWorkout(name){
        setHistory(h => [...h, <Workout/>])
        setNextID(id => id+1)
    }

    return (
        <div>
            <h2>Example History</h2>
            {history}
            <WorkoutForm addWorkout={addWorkout}/>
        </div>
    )
}

export default History