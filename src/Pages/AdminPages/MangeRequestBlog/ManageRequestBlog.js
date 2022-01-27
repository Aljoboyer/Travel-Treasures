import React, {useState,useEffect} from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import RequestBlog from './RequestBlog';

const ManageRequestBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [demo, setDemo] = useState([])
    useEffect(() => {
        fetch('https://aqueous-scrubland-04111.herokuapp.com/getRequestBlog')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[demo])
    
    const ApprovedHandler = (id) => {
        fetch(`https://aqueous-scrubland-04111.herokuapp.com/getApprovedBlog/${id}`)
        .then(res => res.json())
        .then(data => {
            if(data._id){
                delete data['_id'];
                fetch('https://aqueous-scrubland-04111.herokuapp.com/ApprovingBlog',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(res => {
                    fetch(`https://aqueous-scrubland-04111.herokuapp.com/updateRequest/${id}`,{
                        method: 'PUT',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify({mark: 'Mark As Approved'})
                    })
                    .then(res => res.json())
                    .then(data => {
                        setDemo(blogs)
                        Swal.fire(
                            'Blog Approved Succesfully',
                            '',
                            'success'
                          )
                         
                    })
                })
            }
        })
    }
    return (
        <Row clasName="container-fluid">
            <h1 className='regular-color regular-family fw-bold text-center my-2'>Users All Blog Request</h1>
            {
               blogs.length > 0 ? blogs.map(blog => <RequestBlog ApprovedHandler={ApprovedHandler} blog={blog}></RequestBlog>)
               : <Spinner className='mx-auto' animation="border" />
            }
        </Row>
    );
};

export default ManageRequestBlog;