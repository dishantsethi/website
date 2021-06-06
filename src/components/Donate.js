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
        <div style={{display: 'inline', margin: '5px'}}>Buy Me A Coffee!</div>
        </button>
        {showDonate && 
        <div className="overlay">
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeDonateHandler}>
              <Modal.Title>Buy Me A Coffee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>UPI: dishantsethi@axisbank</p>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
      </div> 
    );
}

export default Donate;