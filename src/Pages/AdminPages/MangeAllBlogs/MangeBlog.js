import React from 'react';
import { Col, Card } from 'react-bootstrap';

const MangeBlog = ({blog, EditHandler, DeleteHandler}) => {
    return (
        <Col lg={4} md={8} sm={12}>
        <Card>
            <Card.Img className="blogimg" variant="top" src={`data:image/jpeg;base64,${blog.img}`} />
            <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
                <h5 className='fw-bold text-muted'>{blog.travelerinfo}</h5>
                <p className='text-primary'>{blog.traveldate}</p>
                <p className='text-primary'>{blog.cost}</p>
            </Card.Text>
            </Card.Body>
        <Card.Footer>
            <button onClick={() => DeleteHandler(blog._id)} className='btn btn-warning  fw-bold'>DELETE</button>
            <button onClick={() => EditHandler(blog._id)} className='regularbtn fw-bold mx-3'>EDIT</button>
        </Card.Footer>
        </Card>
        </Col>
    );
};

export default MangeBlog;