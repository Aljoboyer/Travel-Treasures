import React from 'react';
import { Form , Row, Col} from 'react-bootstrap';

const Subscribe = () => {

    return (
        <Row className="subscribe-row mt-4 d-flex align-items-center justify-content-center">
                <Col lg={8} md={10} sm={12}>
                <h3 className="text-light  regular-family fw-bold mt-4 text-center regular-size">SUBSCRIBE</h3>
                <Form.Group controlId="formGridPassword">
                <Form.Label className='regular-family  fw-bold text-light'>Enter Email</Form.Label>
                <Form.Control  name="email" className="inputss"   type="text" placeholder="Enter Email" />
                </Form.Group>
                <button type="submit" className="btn btn-light fw-bold my-4">SUBSCRIBE</button>
                </Col>
        </Row>
    );
};

export default Subscribe;