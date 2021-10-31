import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopBannerImg from './img/Top-banner.png';

const TopBanner = () => {
    return (
        <Container className="">
            <Row className="align-items-center">
                <Col sm={12} md={6}>
                    <img src={TopBannerImg} className="img-fluid" alt="" />
                </Col>
                <Col sm={12} md={6}>
                    <div className="ms-3">
                    <Row className="my-bg">
                        <Col sm={10}><h1 className="fw-bold mb-4 text-light">Others deliver boxes We deliver dreams</h1></Col>
                        
                        <Col sm={12}><h5 className="fw-bold mb-4 text-light">Delivered On Time with no Hassle, Easily track your courier, Get courier within hours. Efficient, safe delivery.</h5></Col>
                         
                    </Row>
                    <Link to='/about-us'> <Button className="my-3" variant="success">Learn more</Button> </Link>
                    </div>
                </Col>    
            </Row>
        </Container>
    );
};

export default TopBanner;