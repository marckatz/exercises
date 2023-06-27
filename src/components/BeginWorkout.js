import React, { Children, useEffect, useState } from "react";
import Workout from "./Workout";

function BeginWorkout(){
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        setFavorites(Children.toArray([
            // <Workout name="placeholder" />,
            // <Workout name="placeholder" />,
            // <Workout name="placeholder" />,
            // <Workout name="placeholder" />,
        ]))
    },[])

    return (
        <div>
            <h2>My Routines</h2>
            {favorites}
        </div>
    )
}

export default BeginWorkout