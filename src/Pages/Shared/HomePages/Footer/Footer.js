import React from 'react';
import {Row, Col} from 'react-bootstrap'
const Footer = () => {
    return (
        <Row className="footer">
            <Row className="pt-4 pb-4 ps-2 pe-2 g-3 justify-content-center">
                <Row className="d-flex justify-content-center my-4">
                   <Col lg={6} md={10} sm={12}>
                       <Row className="justify-content-center">
                       <h4 className='regular-family footer_title text-center my-3'>FOLLOW US</h4>
                        <Col lg={2} md={6} sm={12}>
                            <i className="fab fa-twitter fa-2x footer_icon"></i>
                        </Col>
                        <Col lg={2} md={6} sm={12}>
                            <i className="fab fa-facebook-square fa-2x footer_icon"></i>
                        </Col>
                        <Col lg={2} md={6} sm={12}>
                            <i className="fab fa-youtube fa-2x footer_icon"></i>
                        </Col>
                       </Row>
                   </Col>
                </Row>
                <Col lg={4} md={6} sm={12}>
                    <h4 className='regular-family footer_title'>Travel Resources</h4>
                    <p className='footer_text'>How To Travel The World</p>
                    <p className='footer_text'>Picking A Travel Backpack</p>
                    <p className='footer_text'>How To Save Money For Travel</p>
                    <p className='footer_text'>Top Travel Safety Tips</p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h4 className='regular-family footer_title'>EXPLORE</h4>
                    <p className='footer_text'>Journeys</p>
                    <p className='footer_text'>Places</p>
                    <p className='footer_text'>Channels</p>
                    <p className='footer_text'>Editors’ Picks</p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h4 className='regular-family footer_title'>ABOUT</h4>
                    <p className='footer_text'>Mission</p>
                    <p className='footer_text'>Story & Team</p>
                    <p className='footer_text'>Donate</p>
                    <p className='footer_text'>Terms</p>
                </Col>
            </Row>
        </Row>
    );
};

export default Footer;