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
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeProjectsHandler}>
              <Modal.Title>Projects</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{overflowY: 'scroll', height: '50vh'}}>

                <div className="projects">
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Sethi's Clothing Store - Ecommerce​</p>
                    <div className="jobs__desc">
                    Personalised clothing store built using Vue, VueX, Django and Django Rest Framework.
                    <li>Deployed on free-tier eligible EC2 instance.</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Portfolio Website​</p>
                    <div className="jobs__desc">
                    A Personal Portfolio website built on:
                    <li>Reactjs, React-bootstrap</li>
                    <li>Deployed on github pages</li>
                    </div>
                </div>
                {/* <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Docker Images of curl, kubectl, helm for Gitlab Runner​</p>
                    <div className="jobs__desc">
                    Refer ​ <a href="https://gitlab.com/dishantsethi/dockerfiles/-/blob/master/README.md">README.md</a>​ for description
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Django-blog portal​ <a href="https://github.com/dishantsethi/django-blog/tree/master/Blog">(Github)</a></p>
                    <div className="jobs__desc">
                    A platform where one can post blogs after login and authentication and read blogs anonymously
                    <li>Technologies: Python, Django, Docker</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Contributed in other projects like</p>
                    <div className="jobs__desc">
                    ​ ​ <a href="https://pydelhi.org/blog/pydelhi-meetup-04-August-2018.html">pydelhi/blog</a>​ ,
                     ​ <a href="https://github.com/Norserium/vue-advanced-cropper/pull/86"> vue-advanced-cropper library​</a> , Instagram Bot(Selenium)
                    </div>
                </div> */}
            </div>
            </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
    </div> 
    );
}

export default Projects;