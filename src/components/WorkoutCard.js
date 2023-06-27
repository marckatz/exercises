
function WorkoutCard ({workout}) {

    const {id, date, time, duration, exercises} = workout
    
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
            <h4 className="workout-header"><strong>Workout:</strong> {id}</h4>
            <h4><strong>Date:</strong> {date}</h4>
            <h4 className="workout-time"><strong>Time:</strong> {time}</h4>
            <h4><strong>Duration:</strong> {duration} minutes</h4>
            <h4><strong>Exercises:</strong></h4>
            <ul className="exercise-list">{renderExercises}</ul>
        </div>

    )
}

export default WorkoutCard