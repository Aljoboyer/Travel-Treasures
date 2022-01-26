import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const AdminNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navrow'>
        <Container className='pt-3 pb-3 '>
            <Navbar.Brand > <span  className='text-light fw-bold regular-family fs-3'>Admin DashBoard</span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
           
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default AdminNav;