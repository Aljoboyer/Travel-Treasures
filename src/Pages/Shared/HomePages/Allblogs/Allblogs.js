import React, {useState, useEffect} from 'react';
import { Row, Col, Spinner} from 'react-bootstrap';
import Blog from './Blog';

const AllBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [totalpage,setTotalpage] = useState(0);
    const [pageno, setPageno] = useState(0)
    const size = 10;

    useEffect(() => {
        fetch(`https://aqueous-scrubland-04111.herokuapp.com/getBlogs?page=${pageno}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            if(data)
            {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setTotalpage(pages)
                setBlogs(data.result)
            }
        })
    },[pageno])

    return (
        <Row className='container mx-auto g-3 my-4'>
            <h1 className="regular-size regular-color regular-family  my-4 text-center">travler best EXPERIENCEs</h1>
            <Row className="d-flex justify-content-center">
                <Col lg={7} md={10} sm={12}>
                    {
                        
                    [...Array(totalpage).keys()].map(number => <button onClick={() => setPageno(number)} className={number === pageno  ? 'regularbtn mx-3' : 'blogbtn mx-3'} >Page {number}</button>)
                    }
                </Col>
            </Row>
            {
               blogs.length > 0 ? blogs.map(blog => <Blog blog={blog}></Blog>) : <Spinner className='mx-auto' animation="border" />
            }
        </Row>
    );
};

export default AllBlog;