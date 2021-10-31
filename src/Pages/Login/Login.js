import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import LogInImg from './img/login-2.svg';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    //handle google sign in
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }
    return (
        <Container className="col-md-4 p-3">
            <Row className="text-center">
                <Col>
                    <Card className="border border-2 p-1">
                        <Card.Img className="" variant="top" src={LogInImg} />
                        <Card.Body>
                            <Card.Title className="fw-bold pb-2">Please Sign up or Sign in</Card.Title>
                            <Button onClick={handleGoogleLogin} className="fw-bold text-success" variant="outline-warning">Google SignIn</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;