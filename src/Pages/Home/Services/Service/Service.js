import React from 'react';
import Rating from 'react-rating';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, detail, rating, url} = props.service;
    return (
        <Col>
        <Card className="border-2 rounded p-2">
            <Card.Img className="card-thumbnail my-img" variant="top" src={url} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{detail.slice(0,75)}...</Card.Text>
            <Card.Text>User rating: <span><Rating initialRating={rating} readonly emptySymbol="far fa-star icon" fullSymbol="fas fa-star icon"></Rating></span>
            </Card.Text>
            <Row className="">
                <Link className="btn btn-success" role="button" to={`/get-the-service/${_id}`}>Get the service</Link>
            </Row>
            </Card.Body>  
        </Card>
        </Col>
    );
};

export default Service;