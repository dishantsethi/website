import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    return (
      <div>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>Dishant Sethi || Software Engineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="/website" className="nav__items">Home</Nav.Link>
        <Nav.Link href="/website/about" className="nav__items">About</Nav.Link>
        <Nav.Link href="https://dishantsethi.wordpress.com" className="nav__items" target="_blank">Blog</Nav.Link>
        <Nav.Link href="/website/resume" className="nav__items">Resume</Nav.Link>      
        <Nav.Link href="/website/technology" className="nav__items">Tech Stack</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;