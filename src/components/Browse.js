import React, { Children, useEffect, useState } from "react";
import Exercise from "./Exercise";
import { motion } from "framer-motion";
import Abs from "../MuscleIcons/chest.jpg"

function Browse() {
    const apikey = process.env.REACT_APP_EXERCISE_API_KEY
    const [muscle, setMuscle] = useState("")
    const [type, setType] = useState("")
    const [page, setPage] = useState(0)
    const [returnedExercises, setReturned] = useState([])
    // const [selected, setSelected] = useState(false)
    // const [selectEquipment, setSelectEquipment] = useState(false)

    // function handleChange(e) {
    //     setSelected(e.target.value)
    // }

    useEffect(() => {
        if (muscle || type) {
            const apiQuery = (muscle?"muscle="+muscle:"") + (type?"&type="+type:"") + "&offset=" + page 
            fetch("https://api.api-ninjas.com/v1/exercises?"+apiQuery, {
                headers: {
                    "X-Api-Key": apikey,
                    "content-type": "application/json"
                }
            })
                .then(r => r.json())
                .then(exercises => setReturned(exercises))
        }
    }, [page, muscle, type])

    function displayReturned(exercises) {
        return Children.toArray(exercises.map(exercise => <Exercise exerciseObj={exercise} />))
    }

    function handleMuscleChange(e) {
        setMuscle(e.target.value)
    }

    function handleTypeChange(e){
        setType(e.target.value)
    }

    function nextPage() {
        setPage(p => p + 1)
    }

    function previousPage() {
        setPage(p => p > 0 ? p + 1 : p)
    }

    return (
        <motion.div 
        initial={{x:"100%"}}
        animate={{x:0}}
        exit={{x:"-100%"}}
        transition={{bounce:0}}
        >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            <div > <div class="drop">

         <div class="drop-content">
            
           
         </div>
      </div>
                <select className="dropdown-menu" onChange={handleMuscleChange}>
                    <option value="">Select Muscle</option>
                    <option value="abdominals"> Abdominals</option>
                    <option value="abductors">Abductors</option>
                    <option value="adductors">Adductors</option>
                    <option value="biceps">Biceps</option>
                    <option value="chest">Chest</option>
                    <option value="forearms">Forearms</option>
                    <option value="glutes">Glutes</option>
                    <option value="hamstrings">Hamstrings</option>
                    <option value="lats">Lats</option>
                    <option value="lower_back">Lower Back</option>
                    <option value="middle_back"><img src={Abs}></img>Middle Back</option>
                    <option value="neck">Neck</option>
                    <option value="quadriceps">Quadriceps</option>
                    <option value="traps">Traps </option>
                    <option value="triceps">Triceps</option>
                </select>
                <div>
                        <select className="type-menu"onChange={handleTypeChange}>
                            <option value="">Select Type</option>
                            <option value="olympic_weightlifting">Olympic Weightlifting</option>
                            <option value="plyometrics">Plyometrics</option>
                            <option value="powerlifting">Powerlifting</option>
                            <option value="strength">Strength</option>
                            <option value="stretching">Stretching</option>
                            <option value="strongman">Strongman</option>
                        </select>
                    </div>
                </div>

                    

                    <div>
                
            <div className="browse-card">
                {displayReturned(returnedExercises)}
            </div>
        
            </div>
            
            {/* <div>
                <div className='menu-container'>
                    <div onClick={() => { setSelected(!selected) }}>
                    </div>

                    <div className={`dropdown-menu ${selected ? 'active' : 'inactive'}`} >
                        <div className={`equipment-menu ${selected ? 'active' : 'inactive'}`} ></div>
                        <ul></ul>
                    </div>
                </div>
            </div> */}
        </motion.div>
    )
}

export default Browse