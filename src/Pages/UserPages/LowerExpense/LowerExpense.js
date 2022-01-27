import React, {useState, useEffect} from 'react';
import {Col, Row, Spinner} from 'react-bootstrap'
import Navbars from '../../Shared/HomePages/Navbars/Navbars';
import NavbarRow from '../../Shared/HomePages/Navbars/NavbarRow';
import LowBlog from './LowBlog';

const LowerExpense = () => {
    const [blogs, setBlogs] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:5000/getLowExpense')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <Row className="">
            <NavbarRow></NavbarRow>
            <Navbars></Navbars>
            <Row className="lowerexpense-row">
            <Col  className=" p-4 d-flex justify-content-center align-items-center text-center" lg={12} md={10} sm={12}>
               <Row>
               
                    <h1 className='text-light regular-size regular-family '>all lower expense best trip here</h1>
                    <h4 className="regular-family text-light fw-bold">To travel is to live, Choose Your Place</h4>
                
               </Row>
               </Col>
            </Row>
            <Row className="my-3 g-3">
            {
              blogs.length > 0 ?  blogs?.map(blog => <LowBlog blog={blog} ></LowBlog>)
              : <Spinner className='mx-auto' animation="border" />
            }
            </Row>
        </Row>
    );
};

export default LowerExpense;