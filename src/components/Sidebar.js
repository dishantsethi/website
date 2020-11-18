import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <h1 className="name">
                DISHANT SETHI
            </h1>
            <div>
                SOFTWARE ENGINEER
                <br></br>
                9582565371 
                <br></br>
                BTECH CSE 2016-2020
            </div>
            <div className="experience">
                <div>EXPERIENCE</div>
                <div style={{ marginBottom: 20 }}>
                    <p className="jobs">Essentia Softserv LLP</p>
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
                <div style={{ marginBottom: 20 }}>
                    <p className="jobs">Eckovation</p>
                    <div className="jobs__desc">
                        <strong>Campus Ambassador</strong> Oct 2018 - March 2019
                        <div>
                        Campus Ambassador for college students to introduce them to programming and Eckovation through workshops.
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <p className="jobs">The CasIT</p>
                    <div className="jobs__desc">
                        <strong>Web Development Intern</strong> May 2018 - June 2018
                        <div>
                        Contributed in creating UI for project titled 'Agri Coaching'
                        <li>Technologies - CSS, Javascript</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div>PROJECTS</div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs">Todo Task List App</p>
                    <div className="jobs__desc">
                    <li>dummy</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs">Personal Website</p>
                    <div className="jobs__desc">
                    <li>dummy</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs">Blogging portal </p>
                    <div className="jobs__desc">
                    <li>dummy</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs">Blogs</p>
                    <div className="jobs__desc">
                    <li>Writing on various current technologies to spread information and motivate beginners.</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs">Ecommerce</p>
                    <div className="jobs__desc">
                    <li>dummy</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs">Dockerfiles for linux commands </p>
                    <div className="jobs__desc">
                    <li>dummy</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs">Helm Chats</p>
                    <div className="jobs__desc">
                    <li>dummy</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;