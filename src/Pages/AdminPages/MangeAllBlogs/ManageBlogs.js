import React, { useEffect , useState} from 'react';
import { Row, Col, Modal , Button, Form, Spinner} from 'react-bootstrap';
import Swal from 'sweetalert2';
import MangeBlog from './MangeBlog';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [demo, setDemo] = useState([]);
    const [editblog, setEditblog] = useState({});
    const [show, setShow] = useState(false);
    let [img, setImg] = useState('');

    const imgHandler = e => {
        const data = e.target.files[0];
        setImg(data)
    }

    const onBlurHandler = e => {
        const dataname = e.target.name;
        const datavalue = e.target.value;

        const newdata = {...editblog}
        newdata[dataname] = datavalue;

        setEditblog(newdata)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch('https://aqueous-scrubland-04111.herokuapp.com/getingAllBlog')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[demo])

    const DeleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://aqueous-scrubland-04111.herokuapp.com/deleteblog/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    setDemo(blogs)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                })
      
            }
          })

      
    }   
    const EditHandler = (id) => {
        fetch(`https://aqueous-scrubland-04111.herokuapp.com/getBlogForEdit/${id}`)
        .then(res => res.json())
        .then(data => {
            setEditblog(data)
            setShow(true);
        })
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        if(!img){
            img = editblog.img
        }
        console.log('img',img)
        const fd = new FormData();
        fd.append('title', editblog.title)
        fd.append('category', editblog.category ? editblog.category : 'travel')
        fd.append('cost', editblog.cost)
        fd.append('location', editblog.location)
        fd.append('travelerinfo', editblog.travelerinfo)
        fd.append('img', img ? img : editblog.img)
        fd.append('description', editblog.description);

                //uploading to database
                fetch(`https://aqueous-scrubland-04111.herokuapp.com/EditedBlog/${editblog._id}`, {
                    method: 'PUT',
                    body: fd
                    })
                    .then(response => response.json())
                    .then(result => {
                        setDemo(blogs)
                        Swal.fire(
                            'Blog Information Edited Succesfully',
                            '',
                            'success'
                          )
                          setShow(false);
                    })
                    .catch(error => {
                        console.log('error', error)

                        // Swal.fire(
                        //     '!',
                        //     'Error!',
                        //     'error'
                        //   )
                    });
    }
    return (
        <>
            <Row className="justify-conent-center">
            <h1 className='regularcolor regular-family fw-bold text-center my-4'>Manage All Blog</h1>
            {
              blogs.length > 0 ?  blogs?.map(blog => <MangeBlog blog={blog} EditHandler={EditHandler} DeleteHandler={DeleteHandler}></MangeBlog>)
              : <Spinner className='mx-auto' animation="border" />
            }
            </Row>
    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h3 className="text-center fw-bold my-4">EDIT TRAVEL BLOG</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      <Row className="contianer-fluid justify-content-center mb-4">
        <Form className="addform p-3" onSubmit={SubmitHandler}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Blog Title</Form.Label>
            <Form.Control value={editblog.title} name="title" onChange={onBlurHandler} type="text" placeholder="Blog Title" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Category</Form.Label>
            <Form.Control value={editblog.category}  name="category" onChange={onBlurHandler}  type="text" placeholder="Category" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Cost Of Travel</Form.Label>
            <Form.Control value={editblog.cost} name="cost" onChange={onBlurHandler} type="text" placeholder="Cost Of Travel" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Location Address</Form.Label>
            <Form.Control value={editblog.location} as="textarea" name="location" onChange={onBlurHandler}  type="text" placeholder="Location Address" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fw-bold">Traveler Information</Form.Label>
            <Form.Control value={editblog.travelerinfo} as="textarea"  name="travelerinfo" onChange={onBlurHandler}  type="text" placeholder="Traveler Information" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}  controlId="formFile" className="mb-3">
            <Form.Label className="fw-bold">Choose Blog Image</Form.Label>
            <Form.Control  onBlur={imgHandler} type="file" />
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group  as={Col}  controlId="formGridAddress1">
                <Form.Label className="fw-bold">Description</Form.Label>
                <Form.Control value={editblog.description}  name="description" onChange={onBlurHandler}  as="textarea" placeholder="Description" />
            </Form.Group>
        </Row>
        <Button className="regularbtn" type="submit">
            EDIT BLOG
        </Button>
    </Form>
        
    </Row>  
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-dark text-warning" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    );
};

export default ManageBlogs;