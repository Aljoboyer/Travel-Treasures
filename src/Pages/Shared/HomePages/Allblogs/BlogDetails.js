import React, {useEffect, useState} from 'react';
import { Col, Row} from 'react-bootstrap';
import '../Home.css';
import {  useParams } from "react-router-dom";
import Navbars from '../Navbars/Navbars';
import Rating from 'react-rating';
import NavbarRow from '../Navbars/NavbarRow';

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`https://aqueous-scrubland-04111.herokuapp.com/getSingleBlock/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[id])
    return (
       <Row className="container-fluid">
           <NavbarRow></NavbarRow>
           <Navbars></Navbars>
          <Row className='justify-content-center my-4'>
          <Col lg={5} md={6} sm={12}>
               <img className='img-fluid' src={`data:image/jpeg;base64,${blog.img}`} alt=''/>
           </Col>
           <Col lg={5} md={6} sm={12}>
               <h4>{blog.title}</h4>
               <p className='fw-bold fs-5 text-muted'>Author: {blog.travelerinfo}</p>
               <p className='fw-bold text-muted'>{blog?.traveldate} <span className="mx-3">{blog?.traveltime}</span> </p>
               {
                   blog?.rate ? <Rating  
                   initialRating={blog.rate}
                   emptySymbol="far fa-star"
                   fullSymbol="fas fa-star"
                   readonly></Rating> : ''
               }
               <h5 className="text-primary fw-bold">{blog?.location}</h5>
               <h5 className="text-primary fw-bold">Cost $ {blog?.cost}</h5>
              <p>{blog?.description}</p>
           </Col>
          </Row>
       </Row>
    );
};

export default BlogDetails;