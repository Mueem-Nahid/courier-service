import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import headerImg from './img/header-img.png';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
            <Navbar.Brand as={Link} to="/home">
                <img
                src={headerImg}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Navbar.Brand as={Link} to="/home" className="fw-bolder text-success"><span className="text-danger fw-bolder">5G</span> Courier</Navbar.Brand>
            </Nav>
            <Nav.Link  as={NavLink} to="/home" className="fw-bolder text-success">Home</Nav.Link>
            {/* <Nav.Link  as={NavLink} to="/services" className="fw-bolder text-light">
                Services
            </Nav.Link> */}
            <Nav.Link  as={NavLink} to="/about-us" className="fw-bolder text-success">
                About Us
            </Nav.Link>
            {
                user.email ? <Nav.Link to={`/my-orders/user/${user.email}`} as={NavLink} className="fw-bolder text-success">My Orders</Nav.Link> : ""
            }
            {
                user.email ? <Nav.Link to="/manage-orders" as={NavLink} className="fw-bolder text-success">Manage Orders</Nav.Link> : ""
            }
            {
                user.email ? <Nav.Link to="/add-service" as={NavLink} className="fw-bolder text-success">Add Service</Nav.Link> : ""
            }
            {
                user.email ? <Nav.Link to="/user" as={NavLink} className="fw-bolder text-success">{user.displayName}</Nav.Link> : ""
            }
            {
                user.email ?
                <Nav.Link to="/home" onClick={logOut} className="fw-bolder text-success">Logout</Nav.Link> :
                <Nav.Link to="/login" as={NavLink} className="fw-bolder text-success">Login</Nav.Link>
            }
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;