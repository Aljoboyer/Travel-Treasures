import React from 'react';
import { Col, Row,ListGroup } from 'react-bootstrap';
import AllBlog from './Allblogs/Allblogs';
import HomeSlider from './HomeSlider/HomeSlider';
import NavbarRow from './Navbars/NavbarRow';
import Navbars from './Navbars/Navbars';

const Home = () => {
    return (
        <Row className='justify-content-center'>
            <NavbarRow></NavbarRow>
            <Navbars></Navbars>
            <Row className=''>
                <Col className='sidebar' lg={2}>
                    <h5 className='regular-family sidebar-text text-center regular-color mt-3'>TOP RATED PLACE</h5>
                <ListGroup>
                    <ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >GREECE</ListGroup.Item>
                    <ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >The Matterhorn, Switzerland </ListGroup.Item>
                    <ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Mount Fuji, Japan</ListGroup.Item>
                    <ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Budapest</ListGroup.Item>
                    <ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Hawaii </ListGroup.Item>
                    <ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Grand Canyon</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col lg={10} md={12} sm={12}>
                    <HomeSlider></HomeSlider>
                </Col>
            </Row>
            <AllBlog></AllBlog>
        </Row>
    );
};

export default Home;