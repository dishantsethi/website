import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Experience(props) {
    const [showExp, setShowExp] = useState();
    const [showEss, setShowEss] = useState();
    const [showEcko, setShowEcko] = useState();
    const [showCas, setShowCas] = useState();


    function showExpHandler(){
      setShowExp(true)
    }

    function closeExpHandler(){
      setShowExp(false)
    }

    function showEssHandler(){
        if(showEss === true)
            setShowEss(false)
        else
            setShowEss(true)
    }

    function showEckoHandler(){
        if(showEcko === true)
            setShowEcko(false)
        else
            setShowEcko(true)
    }

    function showCasHandler(){
        if(showCas === true)
            setShowCas(false)
        else
            setShowCas(true)
    }
    return (
    <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showExpHandler}>
        <ion-icon name="desktop-outline"></ion-icon>          
        <div style={{display: 'inline', margin: '5px'}}>Experience</div>
        </button>
        {showExp && 
        <div className="overlay">
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeExpHandler}>
              <Modal.Title>Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{overflowY: 'scroll', height: '50vh'}}>
                <div className="experience">
                <div style={{ marginBottom: 20 }}>
                    <button style={{all: 'unset'}} onClick={showEssHandler}>
                    <p className="jobs">Essentia Softserv LLP 
                    <ion-icon name="caret-down-outline"></ion-icon>
                    </p>
                    </button>
                    { !showEss &&
                    <span>
                        <strong className="jobs__desc"><br/>Software Development Engineer June 2020 - Present</strong> 
                        <strong className="jobs__desc"><br/>SDE Intern May 2019 - July 2019</strong>
                    </span>
                    }
                    { showEss &&
                    <div>
                    <div className="jobs__desc">
                        <strong>Software Development Engineer</strong> June 2020 - Present
                        <div>
                        <li>Managed deployments of <strong>Vue/Nuxt/Django</strong> based projects on <strong>Kubernetes(DigitalOcean)</strong> and <strong>AWS</strong></li>
                        <li><strong>CI/CD on Gitlab</strong> for Vue/Nuxt/Django based projects</li>
                        <li>Contributed in company's website <strong>UI, Dockerfile, Helm Charts, backend APIs</strong> </li>
                        <li>Technologies - <strong>Vue, Nuxt, Docker, Kubernetes, Django Rest Framework</strong> </li>
                        </div>
                    </div>
                    <div className="jobs__desc">
                        <strong>SDE Intern</strong> May 2019 - July 2019
                        <div>
                        The internship aims to solve the issues of a few open-source projects (pythonindia/junction and Fueled/django-init) that concern the company.
                        <li>Send PR for few bugs of pythonindia/junction</li>
                        <li>Study the architecture of Fueled/django-init</li>
                        <li>Technologies - Python Django, Docker</li>
                        </div>
                    </div>
                    </div>
                    }
                </div>
                <div style={{ marginBottom: 20 }}>
                    <button style={{all: 'unset'}} onClick={showEckoHandler}>
                    <p className="jobs">Eckovation
                    <ion-icon name="caret-down-outline"></ion-icon>
                    </p>
                    </button>
                    { !showEcko &&
                        <strong className="jobs__desc"><br/>Campus Ambassador Oct 2018 - March 2019</strong>
                    }
                    { showEcko &&
                    <div className="jobs__desc">
                        <strong>Campus Ambassador</strong> Oct 2018 - March 2019
                        <div>
                        Campus Ambassador for college students to introduce them to programming and Eckovation through workshops.
                        </div>
                    </div>
                    }
                </div>
                <div style={{ marginBottom: 20 }}>
                    <button style={{all: 'unset'}} onClick={showCasHandler}>
                    <p className="jobs">The CasIT
                    <ion-icon name="caret-down-outline"></ion-icon>
                    </p>
                    </button>
                    { !showCas && 
                        <strong className="jobs__desc"><br/>Web Development Intern May 2018 - June 2018</strong> 
                    }
                    { showCas &&
                    <div className="jobs__desc">
                        <strong>Web Development Intern</strong> May 2018 - June 2018
                        <div>
                        Contributed in creating UI for project titled 'Agri Coaching'
                        <li>Technologies - CSS, Javascript</li>
                        </div>
                    </div>
                    }
                </div>
            </div>
            </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
    </div> 
    );
}

export default Experience;