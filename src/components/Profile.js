import React from "react";
import Modal from './Modal';
import { useState} from "react"

function Profile(){
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div>
                <h2 className="profile">Profile</h2>
                <p>Name: </p>
                <p>Streak: </p>
                <p>Total Workouts: </p>
                <p>Workouts Per Week: </p>
            </div>
            <div className= "button-div">
                <button onClick={() => setOpenModal(true)} className={`button-main ${openModal?"hidden-button":""}`} >Begin Workout</button>
                <Modal 
                open={openModal} 
                onClose={() => setOpenModal(false)} />
            </div>
        </div>
        
    )
}

export default Profile