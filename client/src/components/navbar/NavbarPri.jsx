import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'

function NavbarPri() {
  
    return (
        <Navbar style={{gap:"20px"}}>
          {/* <Container> */}
            <Navbar.Brand href="#home"><img src={logo} alt='logo' className='' style={{height:"40px",width:"100px",paddingLeft:"20px"}} /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"  style={{paddingRight:"20px",gap:"20px"}} >
              
              <Button variant='outline-info'>Login</Button>
              <Button variant='info'>Logout</Button>

            </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      );
  
}

export default NavbarPri;



