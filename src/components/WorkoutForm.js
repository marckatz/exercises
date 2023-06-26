import React, { useState } from "react";

function WorkoutForm({addWorkout}){
    const [newName, setNewName] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        addWorkout(newName)
    }

    function handleNameChange(e){
        setNewName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Workout" value={newName} onChange={handleNameChange}></input>
            <input type="submit"></input>
        </form>
    )
}

export default WorkoutForm