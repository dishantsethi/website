import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    return (
      <div className="header">
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>Dishant Sethi || Software Engineer</Navbar.Brand>
        <Navbar.Brand className="ml-auto">
            <Nav.Link href="https://dishantsethi.wordpress.com" className="nav__items" target="_blank">Blog</Nav.Link>
        </Navbar.Brand>
        </Navbar>
      </div>
    );
}

export default Header;