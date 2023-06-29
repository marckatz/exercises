import { useState } from "react"

function WorkoutCard ({workout}) {

    const {id, date, time, duration, exercises, favorited} = workout
    
    const [isFavorited, setFavorited] = useState(favorited)

    const renderExercises = exercises.map((exercise, index) => (
        <li key={index}>
            <p><strong>{exercise.name}</strong></p>
            <ul>
                <li><strong>Sets:</strong> {exercise.sets}</li>
                <li><strong>Reps:</strong> {exercise.reps}</li>
            </ul>
        </li>
    ))

    function handleFavorite(){
        const newFavorited = !isFavorited
        fetch(`http://localhost:3001/workouts/${id}`,{
            method:"PATCH",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                id:id,
                date:date,
                duration:duration,
                exercises:exercises,
                favorited:newFavorited
            })
        })    
        setFavorited(newFavorited)
    }

    return (
        <div className="workout-card">
            <button onClick={handleFavorite}>{isFavorited?"★":"☆"}</button>
            <h4><strong>Workout:</strong> {id}</h4>
            <h4><strong>Date:</strong> {date}</h4>
            <h4><strong>Time:</strong> {time}</h4>
            <h4><strong>Duration:</strong> {duration} minutes</h4>
            <h4><strong>Exercises:</strong></h4>
            <ul className="exercise-list">{renderExercises}</ul>
        </div>

    )
}

export default WorkoutCard