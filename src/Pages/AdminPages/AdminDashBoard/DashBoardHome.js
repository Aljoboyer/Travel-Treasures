import React from 'react';
import { Row, Col } from 'react-bootstrap';
import banner from '../../../Image/admindashbanner.jpg';

const DashBoardHome = () => {
    return (
        <Row className="d-flex justify-content-center align-items-center">
            <Col lg={6} md={10} sm={12}>
            <h1 className="regular-color regular-family title-size text-center mt-3">Admin DashBoard</h1>
                <img className='img-fluid mx-auto' src={banner} alt="" />
            </Col>
        </Row>
    );
};

export default DashBoardHome;