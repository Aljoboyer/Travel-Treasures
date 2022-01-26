import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Authentication/UseFirebase/UseFirebase';

const Navbars = () => {
    const {user,LogoutUser} = useFirebase();
    const navigate = useNavigate()
    const LogOutHandler = () => {
        LogoutUser(navigate)
    }
    return ( 
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className='pt-3 pb-3 ps-2 pe-2'>
            <Navbar.Brand href="#home">Travel Blogs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard">Admin DashBoard</Nav.Link>
                <Nav.Link as={Link} to="/AddYourExperience">Add Your Own Experience</Nav.Link>
                </Nav>
                <Nav>
                    {
                        user.email ? <button onClick={LogOutHandler} className='btn btn-info fw-bold'>LogOut</button> :  <Nav.Link className="bg-warning fw-bold text-dark" as={Link} to="/login">Login</Nav.Link>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Navbars;