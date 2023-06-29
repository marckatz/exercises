import React, { useState } from "react";


function WorkoutCard ({workout}) {

    const {id, date, time, duration, exercises} = workout
    const [favorite,setFavorite] = useState (false)

    function handleFavorite (){
        setFavorite (true)
      }
    
      function handleUnFavorite (){
        setFavorite(false)
      }
    
    const renderExercises = exercises.map((exercise, index) => (
        <li key={index}>
            <p><strong>{exercise.name}</strong></p>
            <ul>
                <li><strong>Sets:</strong> {exercise.sets}</li>
                <li><strong>Reps:</strong> {exercise.reps}</li>
            </ul>
        </li>
    ))
    return (
        <div className="workout-card">
            <h4><strong>Workout:</strong> {id}</h4>
            <h4><strong>Date:</strong> {date}</h4>
            <h4><strong>Time:</strong> {time}</h4>
            <h4><strong>Duration:</strong> {duration} minutes</h4>
            <h4><strong>Exercises:</strong></h4>
            <ul className="exercise-list">{renderExercises}</ul>
            <li className="card">
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active"onClick={handleUnFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick = {handleFavorite}>☆</button>
        )}
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
        </div>

    )
}

export default WorkoutCard