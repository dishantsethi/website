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
         <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeEducationHandler}>
              <Modal.Title>Education</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{overflowY: 'scroll', height: '50vh'}}>
                <div className="education">
                <div>
                    <p className="jobs">Amity University, Noida</p>
                    <div className="jobs__desc">
                        <strong>BTech CSE</strong> 2016 - 2020
                        <br/>
                        <strong>CGPA - 7.46/10.0</strong>
                        <div>
                            <li>Helped in managing various events and workshops in college</li>
                            <li>Helped in establishing a Linux User Group (ALiAS)</li>
                            <li>Member of Umeed A Drop of Hope NGO</li>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="jobs">N C Jindal Public School, Punjabi Bagh</p>
                    <div className="jobs__desc">
                        <strong>Secondary Education</strong> 2014 - 2016
                        <div>
                            <li>Science (Non-med)</li>
                        </div>
                    </div>
                </div>
                <p className="jobs">Certified AWS Cloud Practitioner - AWS</p>
                <p className="jobs">Certified React, Redux Developer - Udemy</p>
                <p className="jobs">Certified Django and Django Rest Framework Web Developer - Udemy</p>
            </div>
            </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
    </div> 
    );
}

export default Education;