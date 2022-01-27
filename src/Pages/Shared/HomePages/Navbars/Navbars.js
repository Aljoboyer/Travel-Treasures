import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Authentication/UseFirebase/UseFirebase';

const Navbars = () => {
    const {user,LogoutUser, isadmin} = useFirebase();
    const navigate = useNavigate()
    const LogOutHandler = () => {
        LogoutUser(navigate)
    }
    return ( 
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className='pt-3 pb-3 ps-2 pe-2'>
            <Navbar.Brand as={Link} to="/"> <span  className='regular-color fw-bold regular-family fs-4'>Travel Treasures</span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/"> <span className='regular-color fw-bold regular-family'>Home</span> </Nav.Link>
                {
                    isadmin && <Nav.Link as={Link} to="/dashboard"> <span className='regular-color fw-bold regular-family'>Admin DashBoard</span> </Nav.Link>
                }
                
                {
                    user.email && <Nav.Link as={Link} to="/AddYourExperience"> <span className='regular-color fw-bold regular-family'>Add Your Own Experience</span> </Nav.Link>
                    
                }
                <Nav.Link as={Link} to="/LowerExpense"> <span className='regular-color fw-bold regular-family'>See most-lower expense trip</span> </Nav.Link>
                <Nav.Link as={Link} to="/TravelAdvise"> <span className='regular-color fw-bold regular-family'>Travel Advise</span> </Nav.Link>

                </Nav>
                
                <Nav>
                    {
                        user.email ? <button onClick={LogOutHandler} className='btn btn-info fw-bold'>LogOut</button> :  <Nav.Link  as={Link} to="/login"><button className='loginbtn'>Login</button></Nav.Link>
                    }
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Navbars;