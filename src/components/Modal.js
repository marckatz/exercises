import React from 'react';
import WorkoutForm from './WorkoutForm';

const Modal = ({ open, onClose }) => {

  function addWorkout(workoutObj){
    fetch('http://localhost:3001/workouts/',{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(workoutObj)
    })
    // .then(r=>r.json())
    // .then(workout => setHistory(h => [...h, workout]))
  }
  
  
  return open?(
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <h1>Workout Started</h1>
            <p>blah blah blah</p>
          </div>
          <div>
            <WorkoutForm addWorkout={addWorkout}/>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'> End Workout</span>
            </button>
            <button className='btnOutline'>
              <span className='bold'>Cancel Workout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ):
  null;
};

export default Modal;