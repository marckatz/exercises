
function WorkoutCard ({workout, exercises}) {

    const {id, date, time, duration} = workout
    const renderExercises = exercises.map((exercise, index) => (
        <li key={index}>
            <p>Name: {exercise.name}</p>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
        </li>
    ))
    return (
        <div>
            <p>Workout: {id}</p>
            <ul>{renderExercises}</ul>
        </div>

    )
}

export default WorkoutCard