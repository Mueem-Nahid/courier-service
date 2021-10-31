import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Locations = () => {
    return (
        <Container>
            <h2 className="text-center pt-5 pb-3 fw-bolder text-light">Our Locations</h2>
        <Row>
            <Col md={7} className="row align-items-center">
            <Table striped bordered hover responsive className="ms-2">
            <tbody className="text-center">
                <tr>
                <td>Dhaka</td>
                </tr>
                <tr>
                <td>Khulna</td>
                </tr>
                <tr>
                <td>Chottogram</td>
                </tr>
                <tr>
                <td>Rajshahi</td>
                </tr>
                <tr>
                <td>Sylhet</td>
                </tr>
                <tr>
                <td>Cox's Bazar</td>
                </tr>
                <tr>
                <td>Barisal</td>
                </tr>
                <tr>
                <td>Maymensingh</td>
                </tr>
            </tbody>
            </Table>
            </Col>
            <Col md={5} className="row align-items-center ms-md-4">
                <img className="img-fluid" src="https://i.ibb.co/gtNQYjW/locations.png" alt="" />
            </Col>
        </Row>
        </Container>
    );
};

export default Locations;