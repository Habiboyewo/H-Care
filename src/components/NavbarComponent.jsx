import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hcarelogo from '../assets/hcarelogo.png'

const NavbarComponent = () => {
    return (
        <Navbar expand="md" className="bg-body-tertiary px-4 ">
            <Container fluid>
                <Navbar.Brand href="/"> <img className='navlogo' src={hcarelogo} style={{height:'40px'}} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll ">
                    <Nav
                        className="me-auto my-2 my-lg-0 ms-auto"
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About</Nav.Link>
                        <Nav.Link href="/consultants">Consultants</Nav.Link>
                        <Nav.Link href="/ourservice">Service</Nav.Link>
                        <Nav.Link href="/contactus">Contact</Nav.Link>

                    </Nav>
                    <Nav.Link href="/bookappointment"><Button >Book Appointment</Button></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent