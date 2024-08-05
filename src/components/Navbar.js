import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavbarItems = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbarMain">
      <Nav className="navbarItems">
        <Nav.Link as={Link} to="/" className="mx-2">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about" className="mx-2">
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to="/academics" className="mx-2">
          Academics
        </Nav.Link>
        <Nav.Link as={Link} to="/admissions" className="mx-2">
          Admissions
        </Nav.Link>
        <Nav.Link as={Link} to="/faculty" className="mx-2">
          Faculty
        </Nav.Link>
        <Nav.Link as={Link} to="/students" className="mx-2">
          Students
        </Nav.Link>
        <Nav.Link as={Link} to="/gallery" className="mx-2">
          Gallery
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="mx-2">
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarItems;
