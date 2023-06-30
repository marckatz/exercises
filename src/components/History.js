import React, {useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { motion } from "framer-motion";

function History(){
    const [history, setHistory] = useState([])

    

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => {setHistory(w)})
    }, [])

    const workoutList = history.map(w => {
        return <WorkoutCard key={w.id} workout={w} />
    })

    return (
        <motion.div 
            className="workout-container"
            initial={{x:"100%"}}
            animate={{x:0}}
            exit={{x:"-100% "}}
            transition={{bounce:0}}
        >
            <br></br>
            <br></br>
            <h2>My History</h2>
            <br></br>
            <br></br>
            <div className="workout-grid">{workoutList}</div>
        </motion.div>
    )
}

export default History