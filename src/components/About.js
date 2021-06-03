import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function About(props) {
    const [showAbout, setShowAbout] = useState();

    function showAboutHandler(){
      setShowAbout(true)
    }

    function closeAboutHandler(){
      setShowAbout(false)
    }

    return (
      <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showAboutHandler}>
        <ion-icon name="happy-outline"></ion-icon>
        <div style={{display: 'inline', margin: '5px'}}>About</div>
        </button>
       {showAbout && 
        <div className="overlay">
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeAboutHandler}>
              <Modal.Title style={{color: 'black'}}>About</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{color: 'black'}}>
              <p>Modal body text goes here.</p>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
      </div> 
      
    );
}

export default About;