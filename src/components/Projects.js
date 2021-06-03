import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Projects(props) {
    const [showProjects, setShowProjects] = useState();

    function showProjectsHandler(){
      setShowProjects(true)
    }

    function closeProjectsHandler(){
      setShowProjects(false)
    }

    return (
    <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showProjectsHandler}>
        <ion-icon name="code-outline"></ion-icon>        
        <div style={{display: 'inline', margin: '5px'}}>Projects</div>
        </button>
        {showProjects && 
        <div className="overlay">
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeProjectsHandler}>
              <Modal.Title style={{color: 'black'}}>Projects</Modal.Title>
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

export default Projects;