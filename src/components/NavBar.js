import React from "react";
import { NavLink } from "react-router-dom";
import Applogo from '../assets/Applogo.jpg';



function NavBar(){
    return (
        <div>
            <div>
            <h1>FlexFlow+</h1>
            <NavLink to="/">
            <img src = {Applogo} alt="Applogo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
            
            </NavLink>
            <NavLink to="beginworkout"style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}> Begin Workout </NavLink>
            <NavLink to="/history"style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}> History </NavLink>
            <NavLink to="/exercises"style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}> Exercises </NavLink>
            </div>
        </div>
    )
}

export default NavBar