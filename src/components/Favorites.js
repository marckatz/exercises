import React, { Children, useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { motion } from "framer-motion";

function Favorites(){
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => {setFavorites(w.filter(workout => workout.favorited))})
    }, [])

    const favoritedWorkouts = favorites.map(workout => <WorkoutCard key={workout.id} workout={workout} />)

    return (
        <motion.div 
        initial={{x:"100%"}}
        animate={{x:0}}
        exit={{x:"-100%"}}
        transition={{bounce:0}}
        >
            <h2>My Favorite Workouts</h2>
            <div className="workout-grid">
                {favoritedWorkouts}
            </div>
        </motion.div>
    )
}

export default Favorites