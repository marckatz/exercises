import React from "react";

function Excercise({exerciseObj}){
    const {name, type, muscle, equipment, difficulty, instructions} = exerciseObj
    return (
        <div className="workout-card">
            <h3>{name}</h3>
            <ul className="exercise-data">
                <li>Type: {type}</li>
                <li>Muscle: {muscle}</li>
                <li>Equipment: {equipment}</li>
                <li>Difficulty: {difficulty}</li>
                <li>Instructions: {instructions}</li>
            </ul>
        </div>
    )
}

export default Excercise