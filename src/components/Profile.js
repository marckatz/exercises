import React from "react";
import Modal from './Modal';
import { useState} from "react"

function Profile({totalWorkouts}){
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div>
                <h2 className="profile">Profile</h2>
                <p>Name: </p>
                <p>Streak: </p>
                <p>Total Workouts: {totalWorkouts}</p>
                <p>Workouts Per Week: </p>
            </div>
            <div className= "button-div">
                <button onClick={() => setOpenModal(true)} className="button-main" >Begin Workout</button>
                <Modal 
                open={openModal} 
                onClose={() => setOpenModal(false)} />
            </div>
        </div>
        
    )
}

export default Profile