import React from 'react';
import { Col, Card} from 'react-bootstrap';
import '../Home.css';
import {  useNavigate } from "react-router-dom";
import Rating from 'react-rating';
import useFirebase from '../../Authentication/UseFirebase/UseFirebase'
const Blog = ({blog}) => {
    const {user,GoogleSignin} = useFirebase()
    const navigate = useNavigate()
    const OnClickHandler = id => {
       if(user.email){
            navigate(`/blogdetails/${id}`)
       }
       else(
        GoogleSignin()
       )
    }
    return (
        <Col lg={3} md={6} sm={12}>
        <Card onClick={() => OnClickHandler(blog._id)} className="blog-cards">
            <Card.Img className="blogimg" variant="top" src={`data:image/jpeg;base64,${blog.img}`}  />
            <Card.Body>
            <Card.Title className="regular-color regular-family fw-bold">{blog.title}</Card.Title>
            {
                   blog?.rate ? <Rating  
                   initialRating={blog.rate}
                   emptySymbol="far fa-star"
                   fullSymbol="fas fa-star"
                   readonly></Rating> : ''
               }
            <Card.Text className="text-muted fs-5 fw-bold">
                {blog.travelerinfo}
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Blog;