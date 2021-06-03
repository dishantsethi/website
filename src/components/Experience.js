import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Experience(props) {
    const [showExp, setShowExp] = useState();

    function showExpHandler(){
      setShowExp(true)
    }

    function closeExpHandler(){
      setShowExp(false)
    }

    return (
    <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showExpHandler}>
        <ion-icon name="desktop-outline"></ion-icon>          
        <div style={{display: 'inline', margin: '5px'}}>Experience</div>
        </button>
        {showExp && 
        <div className="overlay">
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeExpHandler}>
              <Modal.Title style={{color: 'black'}}>Experience</Modal.Title>
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

export default Experience;