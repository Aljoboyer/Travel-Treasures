import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbars from '../../HomePages/Navbars/Navbars';
import NavbarRow from '../../HomePages/Navbars/NavbarRow';
import '../Shared.css'
import useFirebase from '../UseFirebase/UseFirebase';
import Swal from 'sweetalert2';

const Login = () => {
    const [formdata, setFormdata] = useState({});
    const {logerror, LoginUser, GoogleSignin} = useFirebase()
    const location = useLocation()
    const navigate = useNavigate();

    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }

    const SubmitHanlder = (e) => {
        e.preventDefault()
        if(formdata.password && formdata.email)
        {
            LoginUser(formdata.email, formdata.password, navigate,location)
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
                <h5 className="text-danger fw-bold">{logerror}</h5>
            <h3 className="my-4 hometitle">Log in Travel Blog</h3>
                <form onSubmit={SubmitHanlder}>
                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                className="w-75"
                id="floatingInputCustom"
                type="email"
                name="email"
                onBlur={onblurHandler}
                placeholder="Your Email address"
                required
                />
                <label className="fw-bold text-primary" htmlFor="floatingInputCustom">Your Email address</label>
                </Form.Floating>
            <Form.Floating className="fw-bold text-primary">
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
            <button type="submit" className="btn btn-info p-3 fw-bold rounded my-3" >Login</button>
                </form>
                <h4 className='fw-bold'>OR</h4>
                <p className='springtxt fw-bold my-4'>sign in with <i onClick={GoogleHandler} className="fab fa-google fa-2x"></i></p>
                <Link className="fw-bold springtxt fs-6" to="/register">Are New Here ? Register Please</Link>
            </Col>
        </Row>
    </div>
    );
};

export default Login;