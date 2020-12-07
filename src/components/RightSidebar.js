import React from 'react';
import { Button } from 'react-bootstrap';
import DishantSethiResume from '../assets/DishantSethiResume.pdf'

const RightSidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:dishantsethi14@gmail.com")
    }
    return (
        <div>
            <div className="links" onClick={handleEmailMe}>Email Me</div>
            <div className="links">
                <a href="https://www.linkedin.com/in/dishant-sethi-0b1006157/" rel="noreferrer" target="_blank">LinkedIn</a>
            </div>
            <div className="links">
                <a href="https://gitlab.com/dishantsethi" rel="noreferrer" target="_blank">GitLab</a>
            </div>
            <div className="links">
                <a href="https://github.com/dishantsethi" rel="noreferrer" target="_blank">GitHub</a>
            </div>
            <div className="skills">
                <div>SKILLS</div>
                <div>
                    <p className="jobs">Web Technologies</p>
                    <div className="jobs__desc">
                        <div>
                            <p>CSS, Javascript, ReactJS, VueJS, NuxtJS, Python, Python Django, Django Rest Framework, Scrapy, Google Appscripts, Google Spreadsheets</p>
                        </div>
                    </div>
                    <p className="jobs">Programming languages</p>
                    <div className="jobs__desc">
                        <div>
                            <p>Python, Javascript, Java, C++</p>
                        </div>
                    </div>
                    <p className="jobs">Others</p>
                    <div className="jobs__desc">
                        <div>
                            <p>Linux, Docker, Kubernetes, Helm, Docker, Git, Gitlab CI Postgresql, Wordpress, AWS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="volunteer">
                <div>VOLUNTEER</div>
                <div style={{ marginBottom: 20 }}>
                    <p className="jobs">GirlScript Summer of Code 2019</p>
                    <div className="jobs__desc">
                        <strong>Participant and Open Source Contributor</strong> March 2019 - May 2019
                        <div>
                        An Open Source program conducted by GirlScript Foundation, with an aim to help beginners get started with Open Source Development.
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <p className="jobs">Hackathons</p>
                    <div className="jobs__desc">
                        <strong>Participant</strong>
                        <div>
                        MSHack, Technovation, hackinthenorth, HackVSIT, CodeIT
                        </div>
                    </div>
                </div>
            </div>
            <div className="education">
            <div>EDUCATION</div>
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
            </div>
            <div className="hobbies">
                HOBBIES
                <div className="jobs__desc">
                Gym, Cricket
                </div>
            </div>
            <div className="language">
                LANGUAGES
                <div className="jobs__desc">
                English,  French (Basic), Hindi
                </div>
            </div>
            <a href={DishantSethiResume} target="_blank" rel="noopener noreferrer" download>
            <Button variant="outline-primary" size="sm" block>Download Resume</Button>
            </a>
        </div>
    )
}

export default RightSidebar;