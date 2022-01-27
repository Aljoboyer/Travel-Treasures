import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Navbars from '../../Shared/HomePages/Navbars/Navbars';
import NavbarRow from '../../Shared/HomePages/Navbars/NavbarRow';
import Subscribe from '../../Shared/HomePages/Subscribe/Subscribe'
import essay from '../../../Image/photo-essay.jpg';
import gear from '../../../Image/photo-gear.jpg';
import tips from '../../../Image/photo-tips.jpg';

const TravelPhotography = () => {
    return (
        <Row className="">
            <NavbarRow></NavbarRow>
            <Navbars></Navbars>
            <Row className="travelphotogrpahy-row">
                <Col  className=" p-4 d-flex justify-content-center align-items-center text-center" lg={12} md={10} sm={12}>
               <Row>
                    <h1 className='text-light regular-size regular-family '>travel photography</h1>
                    <h4 className="regular-family text-light fw-bold">Photography tips, gear reviews, and <br /> location guides from our travels around the world.</h4>
               </Row>
               </Col>
            </Row>
            <Row className="container justify-content-center g-3 my-4">
                <Col className="text-center" lg={4} md={6} sm={12}>
                    <h4 className='photography-title regular-family'>photo essays</h4>
                    <img className='img-fluid my-2' src={essay} alt=""/>
                    <h6 className='fw-bold regular-color regular-family'>Beautiful photo essays and photography location guides from my adventures around the world.</h6>
                </Col>
                <Col className="text-center" lg={4} md={6} sm={12}>
                <   h4 className='photography-title regular-family'>photography gear</h4>
                    <img className='img-fluid my-2' src={gear} alt=""/>
                    <h6 className='fw-bold regular-color regular-family'>Learn which travel camera gear I use & recommend, along with photo gear reviews.</h6>
                </Col>
                <Col className="text-center" lg={4} md={6} sm={12}>
                    <h4 className='photography-title regular-family'>photography tips</h4>
                    <img className='img-fluid my-2' src={tips} alt=""/>
                    <h6 className='fw-bold regular-color regular-family'>Shoot better images with my best travel photography tips and editing techniques.</h6>
                </Col>
            </Row>
            <Subscribe></Subscribe>
        </Row>
    );
};

export default TravelPhotography;