// import React from 'react';
// import { Badge, Card } from 'react-bootstrap';

// function TechStack() {
//     return (
//       <div className="container">
//         <Card.Header>Technology Stack</Card.Header>
//         <h2 className="container-fluid">
//           <Badge pill variant="secondary" className="tech">Python<br/></Badge>{' '}
//           <Badge pill variant="secondary" className="tech">JavaScript</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Java</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">C++</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">React</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Vue</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Nuxt</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Django</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">DjangoRestFamework</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">RestAPI</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Postgres</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">MySql</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Jest</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">PyTest</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Docker</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Kubernetes</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Helm</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">AWS</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">GCP</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">CloudFormation</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Terraform</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">GitLab CI</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Linux</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Google Appscripts</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Nginx</Badge>{' '}
//           <Badge pill variant="secondary" className="tech">Shell Scripting</Badge>{' '}
//         </h2>
//       </div>
//     );
// }

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function TechStack(props) {
    const [showSkills, setShowSkills] = useState();

    function showSkillsHandler(){
      setShowSkills(true)
    }

    function closeSkillsHandler(){
      setShowSkills(false)
    }

    return (
      <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showSkillsHandler}>
        <ion-icon name="bar-chart-outline"></ion-icon> 
        <div style={{display: 'inline', margin: '5px'}}>Skills</div>
        </button>
        {showSkills && 
        <div className="overlay">
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeSkillsHandler}>
              <Modal.Title style={{color: 'black'}}>Skills</Modal.Title>
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

export default TechStack;