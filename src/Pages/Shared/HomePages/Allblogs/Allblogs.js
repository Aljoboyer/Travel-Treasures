import React, {useState, useEffect} from 'react';
import { Row} from 'react-bootstrap';
import Blog from './Blog';

const AllBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getBlogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <Row className='container-fluid g-3 my-4'>
            <h1 className="fw-bold text-center my-4">All Blogs Here</h1>
            {
                blogs.map(blog => <Blog blog={blog}></Blog>)
            }
        </Row>
    );
};

export default AllBlog;