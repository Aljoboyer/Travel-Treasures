import React from 'react';
import { Col, Card } from 'react-bootstrap';

const RequestBlog = ({blog, ApprovedHandler}) => {
    return (
        <Col lg={4} md={6} sm={12}>
            <Card>
                <Card.Img className="img-fluid" variant="top" src={`data:image/jpeg;base64,${blog.img}`} />
                <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                    <h5 className='fw-bold text-muted'>{blog.travelerinfo}</h5>
                    <p className='text-primary'>{blog.traveldate}</p>
                    <p className='text-primary'>{blog.cost}</p>
                </Card.Text>
                </Card.Body>
            <Card.Footer>
                {blog?.mark ? <h5 className='text-success fw-bold'>{blog.mark}</h5> : <button onClick={() => ApprovedHandler(blog._id)} className='btn btn-success text-light fw-bold'>MARK AS APPROVED</button>}
            </Card.Footer>
            </Card>
        </Col>
    );
};

export default RequestBlog;