import React from 'react';
import {Row,Carousel} from 'react-bootstrap';
import imgone from '../../../../Image/slide-one.jpg'
import imgtwo from '../../../../Image/slide-two.jpg'
import imgthree from '../../../../Image/slide-three.jpg'
import imgfour from '../../../../Image/slide-four.jpg'
import imgfive from '../../../../Image/slide-five.jpg'

const HomeSlider = () => {
    return (
        <Row>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block slider-img"
                src={imgone}
                alt="First slide"
                />
            
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block slider-img"
                src={imgtwo}
                alt="Second slide"
                />
               
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block slider-img"
                src={imgthree}
                alt="Third slide"
                />
                
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block slider-img"
                src={imgfour}
                alt="Third slide"
                />
       
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block slider-img"
                src={imgfive}
                alt="Third slide"
                />
    
            </Carousel.Item>
        </Carousel>
        </Row>
    );
};

export default HomeSlider;