import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'


const Header = () => {
    return (
        <>
        {['xxl'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">Ajker Quiz</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link ><Link className='text-none' to={"/home"}>Home</Link></Nav.Link>
                    <Nav.Link ><Link className='text-none' to={"/statistics"}>Statistics</Link></Nav.Link>
                    <Nav.Link ><Link className='text-none' to={"/blog"}>Blog</Link></Nav.Link>
                    <Link className='text-none' to={"/blog"}></Link>

                    {/* <Link to={"/home"}>Home</Link> 
                    <Link to={"/statistics"}>Statistics</Link> 
                    <Link to={"/blog"}>Blog</Link>  */} 
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
};

export default Header;