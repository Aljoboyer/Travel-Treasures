import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const onBlurHandler = e => {
        setEmail(e.target.value)
    }
    const  SubmitHandler = e => {
        e.preventDefault()

        fetch(`http://localhost:5000/makeAdmin?email=${email}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire(
                    'Admin Added Succesfully',
                    '',
                    'success'
                  )
                e.target.reset()
            }
        })
    }
    return (
        <Row className="container-fluid">
            <h3 className="regular-color regular-family fw-bold my-4 text-center">To Make Admin Enter Email And Add</h3>
        <Form onSubmit={SubmitHandler} className='addform p-4'>
             <Form.Group controlId="formGridPassword">
                <Form.Label className='fw-bold'>Enter Email</Form.Label>
                <Form.Control  name="email" onBlur={onBlurHandler}  type="text" placeholder="Enter Email" />
                </Form.Group>
                <button type="submit" className="btn btn-info fw-bold my-4">Add</button>
            </Form>
        </Row>
    );
};

export default MakeAdmin;