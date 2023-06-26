import React, { Children, useState } from "react";
import Workout from "./Workout";

function Browse(){
    const [muscle, setMuscle] = useState("")
    const [returnedExercises, setReturned] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
            headers:{
                "X-Api-Key":"",
                "content-type":"application/json"
            }
        })
        .then(r => r.json())
        .then(exercises => setReturned(exercises))
    }

    function displayReturned(exercises){
        return Children.toArray(exercises.map(exercise => <li><Workout name={exercise.name}/></li>))
    }

    function handleMuscleChange(e){
        setMuscle(e.target.value)
    }

    return (
        <div>
            <h2>Search:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Muscle" value={muscle} onChange={handleMuscleChange}/>
                <input type="submit" />
            </form>
            <ul>
                {displayReturned(returnedExercises)}
            </ul>
        </div>
    )
}

export default Browse