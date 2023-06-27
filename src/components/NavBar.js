import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-link" to="/history">History</NavLink>
            <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
            <NavLink className="nav-link" to="/browse">Browse</NavLink>
        </div>
    )
}

export default NavBar