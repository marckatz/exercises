import React, { useEffect, useState } from "react";
import Workout from "./Workout";

function Favorites(){
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        setFavorites([
            <Workout id="1" key="1" name="placeholder" />,
            <Workout id="2" key="2" name="placeholder" />,
            <Workout id="3" key="3" name="placeholder" />,
            <Workout id="4" key="4" name="placeholder" />,
        ]) 
    },[])

    return (
        <div>
            <h2>Example Favorites</h2>
            {favorites}
        </div>
    )
}

export default Favorites