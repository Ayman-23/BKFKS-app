import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
      <Navbar.Brand href="/">🏆 Bangladesh KickFighter Karate Schoole</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink>
          <NavLink to="/about" activeClassName="active-link" className="nav-link">About</NavLink>
          <NavLink to="/classes" activeClassName="active-link" className="nav-link">Classes</NavLink>
          <NavLink to="/instructors" activeClassName="active-link" className="nav-link">Instructors</NavLink>
          <NavLink to="/contact" activeClassName="active-link" className="nav-link">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
