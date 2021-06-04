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
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeContactHandler}>
              <Modal.Title>Hire Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
              Hi, you can drop me an email at <a style={{all:'unset', color: 'blue'}}href="mailto:dishantsethi14@gmail.com">dishantsethi14@gmail.com</a>
              </p>
              <a href="tel:9582565371" style={{all:'unset', margin: '10px'}}><ion-icon name="call-outline"></ion-icon></a>
              <a href="https://api.whatsapp.com/send?phone=919582565371&text=Hello%20Dishant" style={{all:'unset', margin: '10px'}}><ion-icon name="logo-whatsapp"></ion-icon></a>
              <a href="https://www.linkedin.com/in/dishant-sethi-0b1006157/" style={{all:'unset', margin: '10px'}}><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="https://www.instagram.com/dishantsethii/" style={{all:'unset', margin: '10px'}}><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="https://github.com/dishantsethi" style={{all:'unset', margin: '10px'}}><ion-icon name="logo-github"></ion-icon></a>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
      </div> 
    );
}

export default Contact;