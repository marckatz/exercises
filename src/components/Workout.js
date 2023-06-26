import React from "react";
import Exercise from "./Exercise";

function Workout({exercises}){
    const exerciseList = exercises.map(e => <li><Exercise exerciseObj={e}/></li>)
    return (
        <ul>
            {exerciseList}
        </ul>
    )
}

export default Workout