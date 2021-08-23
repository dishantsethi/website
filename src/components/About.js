import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Switch from "react-switch";

function About(props) {
    const [showAbout, setShowAbout] = useState();
    const [isPersonal, setIsPersonal] = useState(true);

    function showAboutHandler(){
      setShowAbout(true)
    }

    function closeAboutHandler(){
      setShowAbout(false)
    }

    const handleChange = () => {
      if(isPersonal === true)
      setIsPersonal(false)
      else
      setIsPersonal(true)
    }

    return (
      <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showAboutHandler}>
        <ion-icon name="happy-outline"></ion-icon>
        <div style={{display: 'inline', margin: '5px'}}>About</div>
        </button>
       {showAbout && 
        <div className="overlay">
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeAboutHandler}>
              <Modal.Title>About Dishant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{overflowY: 'scroll', height: '50vh'}}>
              { isPersonal ?
                <div>
                <p style={{textAlign: 'center'}}><b>Dishant Sethi</b> is a <span style={{color: 'blue'}}>reserved, clam and low-pitched</span> person who tends to listen and consider the ideas and feelings of others. He is a <span style={{color: 'blue'}}>low maintainance friends and colleague</span>. He probably looks at his phone and wait it to stop ringing so that he can text and ask you what you want. He loves to <span style={{color: 'blue'}}>cook and eat food, travel, gym and has recently started reading books</span> in free time. Apart from his full-time job, he loves <span style={{color: 'blue'}}>playing cricket</span>. He love to <span style={{color: 'blue'}}>make memes</span> and make people laugh.</p>
                <p style={{textAlign: 'center'}}>Dont DM for rishtas</p>
                </div> :
                <div>
                  <p><b>Outline of his Professional Experience</b><br/>
                  <ul>
                    <li>Believer in Agile Software Development, team work and Clean Code.</li>
                    <li>Fast learner and eager to explore new technologies.</li>
                    <li>Developed, Architeched Microservice backend</li>
                    <li>Able and willing to think outside the box.</li>
                    <li>Good understading of Kubernetes and Helm</li>
                    <li>Good understading for Django and Flask</li>
                    <li>To be Certified React, Redux, React Hooks, Next Developer</li>
                    <li>Well informed with Vue and nuxt</li>
                    <li>To be Certified AWS Cloud Practitioner</li>
                    <li>Worked with AWS products such as EC2, VPC, S3, Load Balancer, Cloudwatch, Elastic Container Services for deploying solutions in the Cloud</li>
                    <li>Used Terraform for launching infrastructure</li>
                    <li>Familiar with Travis CI, Gitlab CI, Argo CD</li>
                    <li>Worked with Queues(celery), Cache(redis), Databases(postgresql)</li>
                  </ul>
                  </p>
                </div>
              }
              <div style={{textAlign: 'center'}}>
                <span style={{Bottom: '100px'}}>Professional </span>
                <Switch onChange={handleChange} checked={isPersonal} offColor="#baaa80" onColor="#353535" uncheckedIcon={<div></div>} checkedIcon={<div></div>}/>
                <span> Personal</span>
              </div>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
      </div> 
      
    );
}

export default About;