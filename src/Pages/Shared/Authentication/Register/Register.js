import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate , useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbars from '../../HomePages/Navbars/Navbars';
import NavbarRow from '../../HomePages/Navbars/NavbarRow';
import useFirebase from '../UseFirebase/UseFirebase';

const Register = () => {
    const [formdata, setFormdata] = useState({});
    const {RegisterUser, user,regerror,setRegerror, GoogleSignin} = useFirebase()
    const [mathcerror, setMatcherror] = useState('')
    const navigate = useNavigate();
    const location = useLocation()

    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }
    const SubmitHanlder = (e) => {
        e.preventDefault()
       if(formdata.password)
       {
           if(formdata.password === formdata.password2)
            {
                RegisterUser(formdata.email, formdata.password, formdata.username, navigate)
                setMatcherror('')
                setRegerror('')
            }
            else{
                setMatcherror('Your Password Is not Matched ')
            }
       }
       else{
        Swal.fire(
            'Please Enter Password & Email Correctly',
            '',
            'error'
          )
       }
    }
    const GoogleHandler = () => {
        GoogleSignin(navigate,location)
    }
    return (
        <div className="container-fluid">
        <NavbarRow></NavbarRow>
        <Navbars></Navbars>
         <Row className="algin-items-center justify-content-center ">
            <Col lg={7} sm={12} md={8} className="login my-4 p-4">
            <h3 className="my-4 hometitle">Create Account To 
            <span className="springtxt fw-bold">Travel Blog</span> </h3>
            <h5 className="text-danger fw-bold">{regerror}</h5>
                <form onSubmit={SubmitHanlder}>
                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                className="w-75"
                id="floatingInputCustom"
                type="text"
                name="username"
                onBlur={onblurHandler}
                placeholder="Your Name"
                required
                />
                <label htmlFor="floatingInputCustom">Your Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                className="w-75"
                id="floatingInputCustom"
                type="email"
                name="email"
                onBlur={onblurHandler}
                placeholder="Your Email"
                required
                />
                <label htmlFor="floatingInputCustom">Your Email address</label>
                 </Form.Floating>
                <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control className="w-75"
                    id="floatingPasswordCustom"
                    type="password"
                    name="password"
                    onBlur={onblurHandler}
                    placeholder="Password"
                    required
                    
                    />
                    <label htmlFor="floatingPasswordCustom">Your Password</label>
                </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control className="w-75"
                    id="floatingPasswordCustom"
                    type="password"
                    name="password2"
                    onBlur={onblurHandler}
                    placeholder="Re Enter Password"
                    required
                    />
                    <label htmlFor="floatingPasswordCustom">Re Enter Password Your Password</label>
                </Form.Floating>
            <p className="text-danger fw-bold">{mathcerror}</p>
            <button type="submit" className="btn btn-info fw-bold rounded my-3" >Register</button>
            <h4 className='fw-bold'>OR</h4>
                <p className='springtxt fw-bold my-4'>sign-up with <i onClick={GoogleHandler} className="fab fa-google fa-2x"></i></p>
                </form>
                <Link className="fw-bold springtxt fs-6" to="/login">Are You Already Rgister? please Login</Link>
            </Col>
        </Row>
    </div>
    );
};

export default Register;