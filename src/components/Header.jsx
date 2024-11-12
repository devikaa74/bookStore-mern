import React from 'react'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
 

  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:'pink'}}>
      <Container>
      <Navbar.Brand href="#home">
    <i className="fa-solid fa-book"></i> bookStore
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#login"><i className="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>

            
            <NavDropdown title={
    <>
      <i className="fa-solid fa-user"></i> Sign in
    </>
  }  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LogIn</NavDropdown.Item>
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header