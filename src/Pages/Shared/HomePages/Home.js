import React, { useEffect, useState } from 'react';
import { Col, Row,ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../Authentication/UseFirebase/UseFirebase';
import AllBlog from './Allblogs/Allblogs';
import HomeSlider from './HomeSlider/HomeSlider';
import NavbarRow from './Navbars/NavbarRow';
import Navbars from './Navbars/Navbars';
import Subscribe from './Subscribe/Subscribe';
import Writeblogs from './Writeblogs/Writeblogs'
const Home = () => {
    const [blogs, setBlogs] = useState([])
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

    useEffect(() => {
        fetch('http://localhost:5000/getTopRatedPlace')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    const newblogs = blogs?.slice(0, 7)
    return (
        <Row className='justify-content-center'>
            <NavbarRow></NavbarRow>
            <Navbars></Navbars>
            <Row className=''>
                <Col className='sidebar' lg={2}>
                    <h5 className='regular-family sidebar-text text-center regular-color mt-3'>TOP RATED PLACE</h5>
                <ListGroup>
                    {
                        newblogs?.map(blog => <ListGroup.Item onClick={() => OnClickHandler(blog._id)}  className="sidebar fw-bold my-2 side-text regular-family regular-color " >{blog.location}</ListGroup.Item>)
                    }
                </ListGroup>
                </Col>
                <Col lg={10} md={12} sm={12}>
                    <HomeSlider></HomeSlider>
                </Col>
            </Row>
            <Writeblogs></Writeblogs>
            <AllBlog></AllBlog>
            <Subscribe></Subscribe>
        </Row>
    );
};

export default Home;
{/* <ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >The Matterhorn, Switzerland </ListGroup.Item>
<ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Mount Fuji, Japan</ListGroup.Item>
<ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Budapest</ListGroup.Item>
<ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Hawaii </ListGroup.Item>
<ListGroup.Item  className="sidebar fw-bold my-2 side-text regular-family regular-color " >Grand Canyon</ListGroup.Item> */}