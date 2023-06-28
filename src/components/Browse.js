import React, { Children, useEffect, useState } from "react";
import Exercise from "./Exercise";

function Browse(){
    const apikey = "BKMqWAGjMtOVWzFo/8vxwg==KwbEyVqZ4bH5TYrM"
    const [muscle, setMuscle] = useState("")
    const [page, setPage] = useState(0)
    const [returnedExercises, setReturned] = useState([])
    const [selected, setSelected] = useState (false)
    const [selectEquipment, setSelectEquipment] = useState (false)

function handleChange (e) {
  setSelected (e.target.value)
}

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
    },[page,muscle])

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&offset=${page}`, {
            headers:{
                "X-Api-Key":apikey,
                "content-type":"application/json"
            }
        })
        .then(r => r.json())
        .then(exercises => setReturned(exercises))
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
            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Muscle" value={muscle} onChange={handleMuscleChange}/>
                <input type="submit" />
            </form> */}
            <ul>
                {displayReturned(returnedExercises)}
            </ul>
            <button onClick={previousPage}>&lt;</button>
            <button onClick={nextPage}>&gt;</button>
        <div className="dropdown-menu">
            <select name="dropdown-menu" onChange={handleMuscleChange}>
            <option value="All">Select Muscle</option>
            <option value="All Body Parts">All Muscles</option>
            <option value="abdominals">Abdominals</option>
            <option value="abductors">Abductors</option>
            <option value="adductors">Adductors</option>
            <option value="biceps">Biceps</option>
            <option value="chest">Chest</option>
            <option value="forearms">Forearms</option>
            <option value="glutes">Glutes</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="lats">Lats</option>
            <option value="lower_back">Lower Back</option>
            <option value="middle_back">Middle Back</option>
            <option value="neck">Neck</option>
            <option value="quadriceps">Quadriceps</option>
            <option value="traps">Traps</option>
            <option value="triceps">Triceps</option>
            </select>
            
        <div className= "equipment-menu">
            <div>
            <select name="equipment-menu" onChange={handleMuscleChange}>
            <option value="All">Select Equipment</option>
            <option value="All Equipment">All Equipment</option>
            <option value="other">Other</option>
            <option value="body_only">Body Only</option>
            </select>
        </div>
        </div>
      </div>
      <div>
      <div className='menu-container'>
        <div onClick={()=>{setSelected(!selected)}}>
        </div>

        <div className={`dropdown-menu ${selected? 'active' : 'inactive'}`} >
        <div className={`equipment-menu ${selected? 'active' : 'inactive'}`} ></div>
          <ul></ul>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Browse