import React from 'react';

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
                <p>SKILLS</p>
            </div>
            <div className="education">
                <p>EDUCATION</p>
            </div>
            <div className="hobbies">
                <p>HOBBIES</p>
            </div>
            <div className="language">
                <p>LANGUAGE</p>
            </div>
        </div>
    )
}

export default RightSidebar;