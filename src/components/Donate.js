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
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeDonateHandler}>
              <Modal.Title style={{color: 'black'}}>Want to Donate ?? </Modal.Title>
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

export default Donate;