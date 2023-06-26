import React from "react";

function Browse(){
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <h2>Search:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Browse