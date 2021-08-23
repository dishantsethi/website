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
                            <li>Regularly interfaced with clients and took complete <strong>ownership</strong> of 2 applications.</li>
                            <li>Contributed to <strong>developing an automation system</strong> that prioritizes and monitor charts for OCR processing for Episource.</li>
                            <li>Successfully developed a logic to turn off idle instances automatically which saved a lot of <strong>unnecessary cost(around 3000$/year) and manual monitoring time.</strong></li>
                            <li><strong>Implemented and designed an archival system</strong> for processed charts, which improved the efficiency of the system. Also, Carefully <strong>documented technical workflows</strong> for the education of newly hired employees.</li>
                            <li>Successfully scaled Episource’s Risk Adjustment Toolkit from <strong>a single calculation to million calculations at a time.</strong></li>
                        </div>
                    </div>
                    <div className="jobs__desc">
                        <strong>SDE Intern</strong> May 2019 - July 2019
                        <div>
                            <li><strong>Solve GitHub issues of an open-source project (pythonindia/junction).</strong></li>
                            <li>Technologies - Python, Django, Django Rest Framework, Docker.</li>
                            <li>Learnt about boilerplate Django application with <strong>2FA.</strong></li>
                            <li>Also showed the following leadership skills: <strong>1) Think Big 2) Have backbone; disagree and commit 3) Insist on highest standards 4) Dive deep.</strong></li>
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
                        <li>Contributed in <strong>creating UI</strong> for project titled 'Agri Coaching'.</li>
                        <li>Technologies - CSS, Bootstrap, Javascript.</li>
                        <li>Learnt about Vanilla Javascript fundamentals.</li>
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