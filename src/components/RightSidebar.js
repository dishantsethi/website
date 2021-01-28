import React from 'react';
import { Button } from 'react-bootstrap';
import DishantSethiSoftwareEngineerResume from '../assets/DishantSethiSoftwareEngineerResume.pdf'

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
            <div className="links">
                <a href="https://dishantsethi.wordpress.com" rel="noreferrer" target="_blank">Blog</a>
            </div>
            <div className="skills">
                <div>SKILLS</div>
                <div>
                    <p className="jobs">Programming languages</p>
                    <div className="jobs__desc">
                        Python, Javascript, Java, C++
                    </div>

                    <p className="jobs">Web Technologies</p>
                    <div className="jobs__desc">
                        React, Vue, Nuxt, Django, Django Rest Framework,  RestAPI, Postgres, MySQL, Jest, PyTest
                    </div>
                    
                    <p className="jobs">Cloud/DevOps</p>
                    <div className="jobs__desc">
                        Docker, Kubernetes, Helm, AWS, GCP, CloudFormation, Terraform
                    </div>
                    <p className="jobs">Others</p>
                    <div className="jobs__desc">
                        Gitlab CI, Linux, Google Appscripts, Nginx, Shell Scripting
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
            <div className="volunteer">
                <div>ACHIEVEMENTS / RESPONSIBILITIES</div>
                <div style={{ marginBottom: 20 }}>
                    <div className="jobs__desc">
                        <div>
                        <li>Helped in conducting various events and establishing a Linux User Group (ALiAS) society</li>
                        <li>GCP: <a href="https://google.qwiklabs.com/public_profiles/eedc5689-0c46-4bb1-90da-063810b217e9" rel="noreferrer" target="_blank">Associate Cloud Engineer Badges from QwikLabs</a></li>
                        <li>Selected for different Hackathons like MSHack, Technovation, hackinthenorth, HackVSIT, CodeIT</li>
                        <li>Languages: Hindi, English, French(Basics)</li>
                        </div>
                    </div>
                </div>
            </div>
            
            <a href={DishantSethiSoftwareEngineerResume} target="_blank" rel="noopener noreferrer" download>
            <Button variant="outline-primary" size="sm" block>Download Resume</Button>
            </a>
        </div>
    )
}

export default RightSidebar;