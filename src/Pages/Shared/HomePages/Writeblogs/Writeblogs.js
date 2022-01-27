import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Writeblogs = () => {
    return (
        <Row className='writeblogrow d-flex justify-content-center align-items-center'>
            <Col className=" p-4" lg={4} md={8} sm={12}>
               <Link to="/AddYourExperience"> <button className='writebtn regular-color regular-family fw-bold fs-6'>add your own EXPERIENCE <i className="fas fa-angle-double-right ms-2"></i></button></Link>
            </Col>
        </Row>
    );
};

export default Writeblogs;