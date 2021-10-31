import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading)
    {
        return <Container className="my-5 py-5 text-center">
                <Row className="align-items-center">
                <Col className="" sm={12}><Spinner animation="border" /></Col>
                </Row>
            </Container>
    }
    return (
        <Route
        {...rest}

        render={({location})=>user.email?children: <Redirect
            to={{
                pathname: '/login',
                state: {from: location}
            }}>
            </Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;