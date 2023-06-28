import React, { Children } from "react";
import Exercise from "./Exercise";

function Workout({exercises, date, time, duration, id}){
    const exerciseList = Children.toArray(exercises.map(e => (
        <li>
            <ul>
                <li>Name: {e.name}</li>
                <li>Reps: {e.reps}</li>
                <li>Sets: {e.sets}</li>
            </ul>
        </li>
    )))
    return (
        <div>
            <h3>Date: {date}</h3>
            <h3>Time: {time}</h3>
            <h3>Duration: {duration} minutes</h3>
            <ul>
                {exerciseList}
            </ul>
        </div>
    )
}

export default Workout