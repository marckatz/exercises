import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink className="navbar" exact to="/">Home</NavLink>
            <NavLink className="navbar" to="/history">History</NavLink>
            <NavLink className="navbar" to="/favorites">Favorites</NavLink>
            <NavLink className="navbar" to="/browse">Browse</NavLink>
        </div>
    )
}

export default NavBar