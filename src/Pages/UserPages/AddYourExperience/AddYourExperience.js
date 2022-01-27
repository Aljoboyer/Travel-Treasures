import React, {useState} from 'react';
import { Row, Col , Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import Rating from 'react-rating';
import Navbars from '../../Shared/HomePages/Navbars/Navbars';
import NavbarRow from '../../Shared/HomePages/Navbars/NavbarRow';
import '../UserPage.css'

const AddYourExperience = () => {
    const [blogdata, setBlogdata] = useState({});
    const [img, setImg] = useState('');
    const [rates, setRates] = useState(0);
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
        fd.append('travelerinfo', blogdata.travelerinfo)
        fd.append('title', blogdata.title)
        fd.append('cost', blogdata.cost)
        fd.append('location', blogdata.location)
        fd.append('traveldate', blogdata.traveldate)
        fd.append('traveltime', blogdata.traveltime)
        fd.append('img', img)
        fd.append('description', blogdata.description)
        fd.append('rate', rates)
        //uploading to database
        fetch('https://aqueous-scrubland-04111.herokuapp.com/ShareExperience', {
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
    <Row className=''>
        <NavbarRow></NavbarRow>
        <Navbars></Navbars>
        <Row className="share-row">
            <Col className="p-4 d-flex justify-content-center align-items-center text-center" lg={12} md={12} sm={12}>
                <Row>
                <h1 className='text-light regular-family regular-size'>Share your travel experience</h1>
                <h4 className='text-light regular-family '>Traveling – it leaves you speechless, <br /> then turns you into a storyteller</h4>
                </Row>
            </Col>
        </Row>
        <Row className="contianer-fluid justify-content-center my-4">
        <Col lg={8} sm={12} md={10}>
        <Form className="addform p-3" onSubmit={SubmitHandler}>
        <Row className="d-flex justify-content-end my-3">
            <Col lg={4}>
                <h5 className="regular-color regular-family fw-bold text-center">Rate Your Trip</h5>
                <Rating
                initialRating={0}
                emptySymbol="far fa-star fa-2x"
                fullSymbol="fas fa-star fa-2x"
                onChange={(rate) => setRates(rate)}/>
            </Col>
        </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="regular-color regular-family fw-bold">Your Name</Form.Label>
                <Form.Control required   name="travelerinfo" onBlur={onBlurHandler}  type="text" placeholder="Traveler Information" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="regular-color regular-family fw-bold">Title</Form.Label>
                <Form.Control required name="title" onBlur={onBlurHandler} type="text" placeholder="Blog Title" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="regular-color regular-family fw-bold">Expense Of Travel</Form.Label>
                <Form.Control required name="cost" onBlur={onBlurHandler} type="text" placeholder="Cost Of Travel" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="regular-color regular-family fw-bold">Place Location Address</Form.Label>
                <Form.Control required as="textarea" name="location" onBlur={onBlurHandler}  type="text" placeholder="Place Location Address" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="regular-color regular-family fw-bold">Travel Date</Form.Label>
                <Form.Control required  name="traveldate" onBlur={onBlurHandler}  type="date" placeholder="Travel Date" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="regular-color regular-family fw-bold">Travel Time</Form.Label>
                <Form.Control   name="traveltime" onBlur={onBlurHandler}  type="text" placeholder="Travel Time" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}  controlId="formFile" className="mb-3">
                    <Form.Label className="regular-color regular-family fw-bold">Choose Travel Image</Form.Label>
                    <Form.Control required onChange={imgHandler} type="file" />
                </Form.Group>
                
            </Row>
            <Row className="mb-3">
                <Form.Group  as={Col}  controlId="formGridAddress1">
                    <Form.Label className="regular-color regular-family fw-bold">Description</Form.Label>
                    <Form.Control required  name="description" onBlur={onBlurHandler}  as="textarea" placeholder="Description" />
                </Form.Group>
            </Row>
            <Button className="regularbtn" type="submit">
                SHARE YOUR EXPERIENCE
            </Button>
        </Form>
        </Col>
        </Row> 
    </Row>
    );
};

export default AddYourExperience;