import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Education(props) {
    const [showEducation, setShowEducation] = useState();

    function showEducationHandler(){
      setShowEducation(true)
    }

    function closeEducationHandler(){
      setShowEducation(false)
    }

    return (
    <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showEducationHandler}>
        <ion-icon name="book-outline"></ion-icon>        
        <div style={{display: 'inline', margin: '5px'}}>Education</div>
        </button>
        {showEducation && 
        <div className="overlay">
         <Modal.Dialog>
            <Modal.Header closeButton onClick={closeEducationHandler}>
              <Modal.Title style={{color: 'black'}}>Education</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{color: 'black'}}>
              <p>Thanks for showing interest</p>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
    </div> 
    );
}

export default Education;