import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';

function Header(props) {
    return (
      <div className="header">
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>Dishant Sethi || Software Engineer</Navbar.Brand>
        <Navbar.Brand className="ml-auto">
            <a href="https://dishantsethi.wordpress.com" target="_blank">
              <Button variant="outline-primary" size="sm">Blog</Button>
            </a>
        </Navbar.Brand>
        </Navbar>
      </div>
    );
}

export default Header;