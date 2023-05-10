import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'

function NavbarSec() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav className="justify-content-center flex-grow-1 pe-3"  style={{ gap: '20px' }}navbarScroll >
 
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Employers</Nav.Link>
            <Nav.Link href="#action2">Departments</Nav.Link>
            {/* <Nav.Link href="#action2">My profile</Nav.Link> */}
            <NavDropdown title="Teams" id="navbarScrollingDropdown2">
              <NavDropdown.Item href="#action3">My Team</NavDropdown.Item>
              <NavDropdown.Item href="#action3">All Teams</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Add new team
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Projets" id="navbarScrollingDropdown3">
              <NavDropdown.Item href="#action3">My Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action3">All Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Add new Project
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSec;



