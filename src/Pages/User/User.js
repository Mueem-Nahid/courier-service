import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const User = () => {
    const {user} = useAuth();
    return (
        <Container className="my-5 py-5 text-center">
            <Row className="align-items-center">
            <Col className="" sm={12}>
                <h3 className="fw-bold my-5 py-5">Hello {user.displayName ? user.displayName : user.email}</h3>
            </Col>
            </Row>
        </Container>
    );
};

export default User;