import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    Outlet
  } from "react-router-dom";
import AdminNav from './AdminNav';
import DashboardSidebar from './DashboardSidebar';
import '../Admin.css'
const AdminDashBoard = () => {
    return (
        <Row className=''>
            <AdminNav></AdminNav>
            <Col lg={2} md={4} sm={12}>
                <DashboardSidebar></DashboardSidebar>
            </Col>
            <Col lg={10} md={4} sm={12}>
                <Outlet/>
            </Col>
        </Row>
    );
};

export default AdminDashBoard;