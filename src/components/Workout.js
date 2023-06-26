import React from "react";

function Workout({id, name}){
    return (
        <div>
            <p>Workout #{id}: {name}</p>
        </div>
    )
}

export default Workout