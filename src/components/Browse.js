import React, { Children, useEffect, useState } from "react";
import Exercise from "./Exercise";

function Browse(){
    const apikey = process.env.REACT_APP_EXERCISE_API_KEY
    const [muscle, setMuscle] = useState("")
    const [page, setPage] = useState(0)
    const [returnedExercises, setReturned] = useState([])

    useEffect(() => {
        if(muscle){
            fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&offset=${page}`, {
                headers:{
                    "X-Api-Key":apikey,
                    "content-type":"application/json"
                }
            })
            .then(r => r.json())
            .then(exercises => setReturned(exercises))
        }
    },[page])

    function handleSubmit(e){
        e.preventDefault()
        console.log(apikey)
        // fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&offset=${page}`, {
        //     headers:{
        //         "X-Api-Key":apikey,
        //         "content-type":"application/json"
        //     }
        // })
        // .then(r => r.json())
        // .then(exercises => setReturned(exercises))
    }

    function displayReturned(exercises){
        return Children.toArray(exercises.map(exercise => <li><Exercise exerciseObj={exercise}/></li>))
    }

    function handleMuscleChange(e){
        setMuscle(e.target.value)
    }

    function nextPage(){
        setPage(p => p+1)
    }

    function previousPage(){
        setPage(p => p>0?p+1:p)
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
            <button onClick={previousPage}>&lt;</button>
            <button onClick={nextPage}>&gt;</button>
        </div>
    )
}

export default Browse