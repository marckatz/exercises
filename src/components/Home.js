import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import WorkoutCard from "./WorkoutCard"
import { motion } from "framer-motion";

function Home(){

    const [workouts, setWorkouts] = useState([])
    const [profile, setProfile] = useState({name:""})

    useEffect(() => {
        fetch('http://localhost:3001/workouts/')
        .then(r => r.json())
        .then(w => setWorkouts(w))
        fetch('http://localhost:3001/profile/')
        .then(r => r.json())
        .then(p => setProfile({name:p.name}))
    },[])

    const renderWorkouts = workouts.slice(0,3).map((workout) => (
        <WorkoutCard
        key={workout.id}
        workout={workout}
        />
    ))

    const totalWorkouts = workouts.length

    return (
        <motion.div
            initial={{x:"100%"}}
            animate={{x:0}}
            exit={{x:"-100%"}}
            transition={{bounce:0}}
        >
            <Profile workouts={workouts} profile={profile}/>
            <h1>My Recent Workouts:</h1>
            <div className="workout-grid">{renderWorkouts}</div>
        </motion.div>
    )
}

export default Home