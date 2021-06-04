// import React from 'react';
// import { Badge, Card } from 'react-bootstrap';

// function TechStack() {
//     return (
//       <div className="container">
//         <Card.Header>Technology Stack</Card.Header>
//         <h2 className="container-fluid">
//         </h2>
//       </div>
//     );
// }

import React, { useState } from 'react';
import { Modal, Badge } from 'react-bootstrap';

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
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeSkillsHandler}>
              <Modal.Title>Skills</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{overflowY: 'scroll', height: '50vh'}}>
              <h5>Programming Languages</ h5>

                <Badge pill variant="secondary"  >Python</Badge>{' '}
                <Badge pill variant="secondary"  >JavaScript</Badge>{' '}
                <Badge pill variant="secondary"  >Java</Badge>{' '}
                <Badge pill variant="secondary"  >HTML</Badge>{' '}
                <Badge pill variant="secondary"  >CSS</Badge>{' '}

              <h5>Frontend Technologies</ h5>
                <Badge pill variant="secondary"  >React</Badge>{' '}
                <Badge pill variant="secondary"  >Vue</Badge>{' '}
                <Badge pill variant="secondary"  >Nuxt</Badge>{' '}
                <Badge pill variant="secondary"  >Next</Badge>{' '}
                <Badge pill variant="secondary"  >Redux</Badge>{' '}
                <Badge pill variant="secondary"  >Vuex</Badge>{' '}
                <Badge pill variant="secondary"  >Jest</Badge>{' '}

              <h5>Backend Technologies</ h5>
                <Badge pill variant="secondary"  >Django</Badge>{' '}
                <Badge pill variant="secondary"  >DjangoRestFamework</Badge>{' '}
                <Badge pill variant="secondary"  >Flask</Badge>{' '}
                <Badge pill variant="secondary"  >RestAPI</Badge>{' '}
                <Badge pill variant="secondary"  >PyTest</Badge>{' '}
                <Badge pill variant="secondary"  >Postgres</Badge>{' '}

              <h5>Devops tools/OS</ h5>
                <Badge pill variant="secondary"  >Git</Badge>{' '}
                <Badge pill variant="secondary"  >Docker</Badge>{' '}
                <Badge pill variant="secondary"  >Kubernetes</Badge>{' '}
                <Badge pill variant="secondary"  >Helm</Badge>{' '}
                <Badge pill variant="secondary"  >AWS</Badge>{' '}
                <Badge pill variant="secondary"  >CloudFormation</Badge>{' '}
                <Badge pill variant="secondary"  >Terraform</Badge>{' '}
                <Badge pill variant="secondary"  >GitLab CI</Badge>{' '}
                <Badge pill variant="secondary"  >Travis CI</Badge>{' '}
                <Badge pill variant="secondary"  >Linux</Badge>{' '}
                <Badge pill variant="secondary"  >Nginx</Badge>{' '}
                <Badge pill variant="secondary"  >Shell Scripting</Badge>{' '}

              <h5>Other Skills</ h5>
                <Badge pill variant="secondary"  >Documentation</Badge>{' '}
                <Badge pill variant="secondary"  >Flow diagrams</Badge>{' '}
                <Badge pill variant="secondary"  >Problem Solving/Debugging</Badge>{' '}
            </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
      </div>
    );
}

export default TechStack;