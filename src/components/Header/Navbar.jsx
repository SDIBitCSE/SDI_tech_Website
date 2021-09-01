import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
//npm imports

function Header(){
    return(<div>
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
  <Container>
  <Navbar.Brand className="justify-content-start" href="#home"><img height="80px" width="60px" src="img/sdinavbar.png" alt="sdi-logo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto justify-content-end" activeKey="/home" style={{ width: "100%" }} >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link style={{paddingRight: "1rem"}} href="/about">About</Nav.Link>
        <Nav.Link style={{paddingRight: "1rem"}} href="/team">Team</Nav.Link>
        <Nav.Link style={{paddingRight: "1rem"}} href="/events">Events</Nav.Link>
        <Nav.Link style={{paddingRight: "1rem"}} href="/contact">Contact Us</Nav.Link>
     </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>)
}
//function

export default Header;
//exports

