import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavigationBar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand to="/home" as={Link}>
        <FontAwesomeIcon icon={faHome} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mr-auto" className="justify-content-end">
          <Nav.Link to="/about" as={Link}>About</Nav.Link>
          <NavDropdown title="Hockey" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/hockeygameworn">Game Worn</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/hockeyequipment">Equipment</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/hockeyautograph">Autograph</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Baseball" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/baseballgameworn">Game Worn</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/baseballequipment">Equipment</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/baseballautograph">Autograph</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;