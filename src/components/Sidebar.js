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
                    <p className="jobs__heading">Blog <a href="https://dishantsethi.wordpress.com/">(Link)</a></p>
                    <div className="jobs__desc">
                    Writing on various current technologies to spread information and motivate beginners.
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Todo Task List App​ <a href="https://github.com/dishantsethi/todo">(Github)</a>​ <a href="https://todotasklistapp.herokuapp.com/">(App)</a></p>
                    <div className="jobs__desc">
                    A Simple UI application to track your tasks with cool features.
                    <li>Technologies: Python, Django, Django Rest Framework. Deployed on heroku, Database: Postgresql</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Portfolio Website​ <a href="https://github.com/dishantsethi/website">(Github)</a>​</p>
                    <div className="jobs__desc">
                    A Personal Portfolio website built on:
                    <li>Reactjs, React-bootstrap</li>
                    <li>Deployed on github pages</li>
                    </div>
                </div>
                <div style={{ marginBottom: 0 }}>
                    <p className="jobs__heading">Docker Images of curl, kubectl, helm for Gitlab Runner​ <a href="https://gitlab.com/dishantsethi/dockerfiles/-/blob/master/README.md">(GitLab)</a></p>
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
                </div>
            </div>
        </div>
    )
}

export default Sidebar;