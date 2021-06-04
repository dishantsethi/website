import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Donate(props) {
    const [showDonate, setShowDonate] = useState();

    function showDonateHandler(){
      setShowDonate(true)
    }

    function closeDonateHandler(){
      setShowDonate(false)
    }

    return (
      <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showDonateHandler}>
          <ion-icon name="card-outline"></ion-icon>          
        <div style={{display: 'inline', margin: '5px'}}>Donate</div>
        </button>
        {showDonate && 
        <div className="overlay">
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeDonateHandler}>
              <Modal.Title>Want to Donate ?? </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Thanks for showing interest</p>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
      </div> 
    );
}

export default Donate;