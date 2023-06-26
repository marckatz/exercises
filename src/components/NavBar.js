import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/browse">Browse</NavLink>
        </div>
    )
}

export default NavBar