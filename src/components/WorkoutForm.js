import React, { Children, useEffect, useState } from "react";

function WorkoutForm({ addWorkout }) {
    const [newDateTime, setDateTime] = useState("")
    const [newDuration, setDuration] = useState(0)

    const [exercises, setExercises] = useState([])
    const [exerciseList, setExerciseList] = useState([])

    const [newExerciseName, setNewExerciseName] = useState("")
    const [newExerciseReps, setNewExerciseReps] = useState(0)
    const [newExerciseSets, setNewExerciseSets] = useState(0)
    const [timeSpent, setTimeSpent] = useState(0)
    const [paused, setPaused] = useState(false)

    function handlePause(e){
        e.preventDefault()
        setPaused(!paused)
    }

    useEffect(() => {
        let timerInterval
        if(!paused){
            timerInterval = setInterval(() => setTimeSpent(t => t+1 ),10)
        }
        return () => clearInterval(timerInterval)
    },[paused, timeSpent])

    function handleSubmit(e) {
        e.preventDefault()
        const tIndex = newDateTime.indexOf('T')
        const workoutObj = {
            date: newDateTime.slice(0, tIndex),
            time: newDateTime.slice(tIndex + 1),
            duration: newDuration,
            exercises: exerciseList
        }
        addWorkout(workoutObj)
        setDateTime("")
        setDuration(0)
        setExercises([])
        setExerciseList([])
    }

    function handleDateTimeChange(e) {
        setDateTime(e.target.value)
    }

    function handleDurationChange(e) {
        setDuration(+e.target.value)
    }

    function handleNameChange(e) {
        setNewExerciseName(e.target.value)
    }

    function handleRepsChange(e) {
        setNewExerciseReps(+e.target.value)
    }

    function handleSetsChange(e) {
        setNewExerciseSets(+e.target.value)
    }

    function addNewExercise(name, sets, reps) {
        const exerciseObj = { name: name, reps: reps, sets: sets }
        setExercises(e => Children.toArray([...e, <li>{name}</li>]))
        setExerciseList(e => [...e, exerciseObj])
    }

    function handleAddExercise(e) {
        e.preventDefault()
        addNewExercise(newExerciseName, newExerciseReps, newExerciseSets)
        setNewExerciseName("")
        setNewExerciseReps(0)
        setNewExerciseSets(0)
    }

    const hours = Math.floor(timeSpent / 360000)
    const minutes = Math.floor((timeSpent % 360000) / 6000);
    const seconds = Math.floor((timeSpent % 6000) / 100);
    const msecs = Math.floor((timeSpent % 100))

    return (
        <form onSubmit={handleSubmit}>
            <p>Time: {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{msecs.toString().padStart(2, "0")}</p>
            <input type="datetime-local" value={newDateTime} onChange={handleDateTimeChange} />
            <label htmlFor="duration">Duration (minutes):</label>
            <input type="number" id="duration" value={newDuration} onChange={handleDurationChange} />
            <div>
                <h3>Exercises:</h3>
                <ul>
                    {exercises}
                </ul>
                <input type="text" placeholder="New Exercise" value={newExerciseName} onChange={handleNameChange} />

                <label htmlFor="reps">Reps:</label>
                <input type="number" id="reps" value={newExerciseReps} onChange={handleRepsChange} />

                <label htmlFor="sets">Sets:</label>
                <input type="number" id="sets" value={newExerciseSets} onChange={handleSetsChange} />

                <button onClick={handleAddExercise}>Add Exercise</button>
            </div>
            <div className='btnContainer'>
                <button className='btnPrimary' onClick={handleSubmit}>
                    <span className='bold'> Submit Workout</span>
                </button>
                <button className='btnPrimary' onClick={handlePause}>
                    <span className='bold'>{paused?"Resume":"Pause"} timer</span>
                </button>
            </div>
        </form>
    )
}

export default WorkoutForm