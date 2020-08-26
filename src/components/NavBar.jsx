import React from "react";
import "../css/navbar.css";
import "bootswatch/dist/slate/bootstrap.min.css";
import {Navbar, Nav} from "react-bootstrap";
 
function NavBar (){
    return <div id="navbar">
    <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">Seth Stephens</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
      <Nav className="ml-auto">
        <Nav.Link style={{border: "none"}} href="#home">About</Nav.Link>
        <Nav.Link style={{border: "none"}} href="#projects">Projects</Nav.Link>
        <Nav.Link style={{border: "none"}} href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
}

export default NavBar;