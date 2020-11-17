import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {
    const handleEmailMe = () => {
        window.open("mailto:dishantsethi14@gmail.com")
    }
    return (
        <Navbar bg="light" expand="lg" className="footer">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
        <Nav.Link href="https://www.linkedin.com/in/dishant-sethi-0b1006157/" target="_blank" className="nav__items">LinkedIn</Nav.Link>
        <Nav.Link href="https://twitter.com/Dishantsethi14" target="_blank" className="nav__items">Twitter</Nav.Link>
        <Nav.Link href="https://gitlab.com/dishantsethi" target="_blank" className="nav__items">GitLab</Nav.Link>
        <Nav.Link href="https://github.com/dishantsethi" target="_blank" className="nav__items">Github</Nav.Link>
        <Nav.Link onClick={handleEmailMe} className="nav__items">Email</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Footer;