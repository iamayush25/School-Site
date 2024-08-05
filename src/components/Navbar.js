import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarItems = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/academics">
            Academics
          </Nav.Link>
          <Nav.Link as={Link} to="/admissions">
            Admissions
          </Nav.Link>
          <Nav.Link as={Link} to="/faculty">
            Faculty
          </Nav.Link>
          <Nav.Link as={Link} to="/students">
            Students
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarItems;
