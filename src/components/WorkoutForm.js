import React, { Children, useState } from "react";

function WorkoutForm({ addWorkout }) {
    const [newDateTime, setDateTime] = useState("")
    const [newDuration, setDuration] = useState(0)

    const [exercises, setExercises] = useState([])
    const [exerciseList, setExerciseList] = useState([])

    const [newExerciseName, setNewExerciseName] = useState("")
    const [newExerciseReps, setNewExerciseReps] = useState(0)
    const [newExerciseSets, setNewExerciseSets] = useState(0)
    const [startTime, setStartTime] = useState(Date.now)
    const [timeSpent, setTimeSpent] = useState(0)

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

    return (
        <form className="workout-form" onSubmit={handleSubmit}>
            <p>Time: {Math.floor((startTime-Date.now) / 1000)}</p>
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
                <button className='btnOutline'>
                    <span className='bold'>Cancel Workout</span>
                </button>
            </div>
        </form>
    )
}

export default WorkoutForm