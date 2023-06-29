import React, { useState } from "react";

function Excercise({exerciseObj}){
    const [showInstructions, setShowInstructions] = useState(false)

    function handleShowClick(){
        setShowInstructions(i => !i)
    }

    const {name, type, muscle, equipment, difficulty, instructions} = exerciseObj
    return (
        <div className="workout-card" onClick={handleShowClick}>
            <h3>{name}</h3>
            <ul className="exercise-data">
                <li>Type: {type}</li>
                <li>Muscle: {muscle}</li>
                <li>Equipment: {equipment}</li>
                <li>Difficulty: {difficulty}</li>
                {showInstructions?<li>Instructions: {instructions}</li>:null}
            </ul>
        </div>
    )
}

export default Excercise