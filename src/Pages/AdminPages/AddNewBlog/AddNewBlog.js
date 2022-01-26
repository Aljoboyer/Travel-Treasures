import React, {useState} from 'react';
import { Row, Col , Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddNewBlog = () => {
    const [blogdata, setBlogdata] = useState({});
    const [img, setImg] = useState('');

    const imgHandler = e => {
        const data = e.target.files[0];
        setImg(data)
    }
    const onBlurHandler = e => {
        const dataname = e.target.name;
        const datavalue = e.target.value;

        const newdata = {...blogdata}
        newdata[dataname] = datavalue;

        setBlogdata(newdata)
    }

    const SubmitHandler = e => {
        e.preventDefault();
        if(!img )
            {
                return;
            }
        const fd = new FormData();
        fd.append('title', blogdata.title)
        fd.append('category', blogdata.category)
        fd.append('cost', blogdata.cost)
        fd.append('location', blogdata.location)
        fd.append('travelerinfo', blogdata.travelerinfo)
        fd.append('img', img)
        fd.append('description', blogdata.description)
        //uploading to database
        fetch('http://localhost:5000/addNewBlog', {
            method: 'POST',
            body: fd
            })
            .then(response => response.json())
            .then(result => {
                e.target.reset();
                Swal.fire(
                    'Blog Information Added Succesfully',
                    '',
                    'success'
                  )
            })
            .catch(error => {
                Swal.fire(
                    '!',
                    'Error!',
                    'error'
                  )
            });
    }

    return (
    <Row className="contianer-fluid justify-content-center mb-4">
        <h3 className="text-center fw-bold my-4">ADD NEW TRAVEL BLOG</h3>
        <Col lg={8} sm={12} md={10}>
        <Form className="addform p-3" onSubmit={SubmitHandler}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Blog Title</Form.Label>
            <Form.Control name="title" onBlur={onBlurHandler} type="text" placeholder="Blog Title" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Category</Form.Label>
            <Form.Control  name="category" onBlur={onBlurHandler}  type="text" placeholder="Category" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Cost Of Travel</Form.Label>
            <Form.Control name="cost" onBlur={onBlurHandler} type="text" placeholder="Cost Of Travel" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Location Address</Form.Label>
            <Form.Control as="textarea" name="location" onBlur={onBlurHandler}  type="text" placeholder="Location Address" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Traveler Information</Form.Label>
            <Form.Control as="textarea"  name="travelerinfo" onBlur={onBlurHandler}  type="text" placeholder="Traveler Information" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}  controlId="formFile" className="mb-3">
            <Form.Label className="fw-bold">Choose Blog Image</Form.Label>
            <Form.Control onChange={imgHandler} type="file" />
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group  as={Col}  controlId="formGridAddress1">
                <Form.Label className="fw-bold">Description</Form.Label>
                <Form.Control  name="description" onBlur={onBlurHandler}  as="textarea" placeholder="Description" />
            </Form.Group>
        </Row>
        <Button className="regularbtn" type="submit">
            ADD NEW BLOG
        </Button>
    </Form>
        </Col>
    </Row>  
    );
};

export default AddNewBlog;