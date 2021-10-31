import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-pirate-25975.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[]);
    return (
        <div className="container">
            <div>
                <h2 className="text-center fw-bold py-5 text-light">Our services</h2>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service._id}
                    service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;