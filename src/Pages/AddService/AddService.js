import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    
    const { register, handleSubmit, reset, formState: {errors} } = useForm();

    //function to handle modal
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const onSubmit = data => {
        const newService = data;

        fetch('https://shrieking-pirate-25975.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res=>res.json())
        .then(data=>{
            data.insertedId ? setMessage('Service added') : setMessage('Service not added');
            handleShow();
            reset();
        })
    };

    return (
        <div className="container">
            <h2 className="text-center fw-bold p-3 mt-3 text-light">Add A New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="container col-md-6 mt-4  fw-normal">
                
                <div className="mb-3">
                    <label>Service name:</label>
                    <input type="text" {...register("name", { required: true })} className="form-control"/>
                </div>
                {errors.name && <p className="text-danger">This field is required</p>}
                
                <div className="mb-3">
                    <label>Service detail:</label>
                    <textarea type="text" {...register("detail", { required: true })} className="form-control"/>
                </div>
                {errors.detail && <p className="text-danger">This field is required</p>}

                <div className="mb-3">
                    <label>Service rating:</label>
                    <input type="number" min="1" max="5" {...register("rating", { required: true, min: 1, max: 5 })} className="form-control"/>
                </div>
                {errors.rating && <p className="text-danger">This field is required</p>}
        
                <div className="mb-3">
                    <label>Image URL:</label>
                    <input type="text" {...register("url", { required: true })} className="form-control"/>
                </div>
                {errors.url && <p className="text-danger">This field is required</p>}
                
                <input className="btn btn-success" type="submit" />
            </form>

            <Modal show={show}>
            <Modal.Header>
                <Modal.Title>{message}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Close</Button>
            </Modal.Footer>
            </Modal>

        </div>
    );
};

export default AddService;