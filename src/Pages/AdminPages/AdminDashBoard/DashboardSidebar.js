import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {

    const LogOutHandler = () => {

    }
    return (
        <ListGroup>
        <ListGroup.Item onClick={LogOutHandler} className="fw-bold sidetxt my-2"  variant="dark">Logout</ListGroup.Item>
        <ListGroup.Item as={Link} to="/"  className="fw-bold sidetxt my-2"  variant="dark">User Home</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/AddNewBlog"  variant="dark">Add New Blog</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/ManageBlogs" variant="light">Manage Blogs</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/ManageRequestBlog"  variant="dark">Manage Request Blog</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/MakeAdmin" variant="light">Make Admin</ListGroup.Item>
        </ListGroup>
    );
};

export default DashboardSidebar;