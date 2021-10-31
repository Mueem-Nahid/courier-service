import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const GetTheService = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [service, setService] = useState({});

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('')

    const { register, handleSubmit, reset, formState: {errors} } = useForm();

    //function to handle modal
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect( () => {
        const url = `https://shrieking-pirate-25975.herokuapp.com/services/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

    //function onSubmit
    const onSubmit = (data) => {
        data.orderedServiceId = service._id;
        data.orderedServiceName = service.name;
        // console.log(data);
        fetch('https://shrieking-pirate-25975.herokuapp.com/place-order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            result.insertedId ? setMessage('Order placed. Thank you for taking our service.') : setMessage('Order not placed.');
            handleShow();
            reset();
        })
    }

    return (
        <Container className="py-5">
        <Row>
            <Col sm={12} md={6}>
                <Card className="border border-2 p-1">
                    <Card.Img variant="top" src={service?.url} />
                    <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
                    <Card.Text>
                        {service?.detail}
                    </Card.Text>
                    <Card.Text>User rating: <span><Rating initialRating={service?.rating} readonly emptySymbol="far fa-star icon" fullSymbol="fas fa-star icon"></Rating></span> 
                    </Card.Text>
                    </Card.Body>
                    <Link className="btn btn-success" role="button" to="/home">Back to home</Link>
                </Card>
            </Col>
            <Col sm={12} md={6} className=" pt-4 pt-md-0 ps-md-5">
                <form onSubmit={handleSubmit(onSubmit)} className="container fw-normal">
                <h2 className="text-light p-2 text-center">Fill up the form to order</h2>
                    <div className="mb-3">
                        <label>User name:</label>
                        <input type="text" defaultValue={user.displayName} {...register("userName", { required: true })} className="form-control"/>
                    </div>
                    {errors.userName && <p className="text-danger">This field is required</p>}
                    
                    <div className="mb-3">
                        <label>User email:</label>
                        <input type="email" defaultValue={user.email} {...register("userEmail", { required: true })} className="form-control"/>
                    </div>
                    {errors.userEame && <p className="text-danger">This field is required</p>}

                    <div className="mb-3">
                        <label>Address:</label>
                        <input type="text" {...register("address", { required: true })} className="form-control"/>
                    </div>
                    {errors.address && <p className="text-danger">This field is required</p>}
            
                    <div className="mb-3">
                        <label>City:</label>
                        <input type="text" {...register("city", { required: true })} className="form-control"/>
                    </div>
                    {errors.city && <p className="text-danger">This field is required</p>}
                    
                    <div className="mb-3">
                        <label>Mobile number:</label>
                        <input type="number" min="0" {...register("phoneNumber", { required: true })} className="form-control"/>
                    </div>
                    {errors.phoneNumber && <p className="text-danger">This field is required</p>}

                    <input type="hidden" defaultValue='pending' {...register("status", { required: true })} className="form-control"/>

                    <input className="btn btn-success container" type="submit" value="Place order"/>
                </form>
            </Col>
        </Row>

        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>{message}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>

        </Container>
    );
};

export default GetTheService;