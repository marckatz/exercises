import React, { Children, useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

function Favorites(){
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => {setFavorites(w.filter(workout => workout.favorited))})
    }, [])

    const favoritedWorkouts = favorites.map(workout => <WorkoutCard key={workout.id} workout={workout} />)

    return (
        <div>
            <h2>Example Favorites</h2>
            <div className="workout-grid">
                {favoritedWorkouts}
            </div>
        </div>
    )
}

export default Favorites