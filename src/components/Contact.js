// import React from 'react';

// function Contact() {
  //     return (
    //       <div className="container">
    //         <Card.Header>Contact</Card.Header>
    //         <div className="contact">
    //             Hey, you can drop him an email at dishantsethi14@gmail.com
    //         </div>
    //       </div>
    //     );
    // }
    
    // export default Contact;
    
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Contact(props) {
    const [showContact, setShowContact] = useState();

    function showContactHandler(){
      setShowContact(true)
    }

    function closeContactHandler(){
      setShowContact(false)
    }

    return (
      <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showContactHandler}>
          <ion-icon name="git-network-outline"></ion-icon>
        <div style={{display: 'inline', margin: '5px'}}>Hire Me</div>
        </button>
        {showContact && 
        <div className="overlay">
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeContactHandler}>
              <Modal.Title style={{color: 'black'}}>Hire Me</Modal.Title>
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

export default Contact;