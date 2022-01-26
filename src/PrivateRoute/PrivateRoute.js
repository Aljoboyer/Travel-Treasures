import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useFirebase from '../Pages/Shared/Authentication/UseFirebase/UseFirebase';

const Privateroute = ({children}) => {
    const {user,isloading} = useFirebase()

    const location = useLocation()

    if(isloading)
        {
            return <Spinner animation="border" />
        }
    if(user.email)
        {
            return children;
        }
    return <Navigate to="/login" state={{from: location}} />
};

export default Privateroute;