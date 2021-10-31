import React, { useEffect, useState } from 'react';
import Client from './Client';

const OurClients = () => {
    const [clients, setClients] = useState([]);

    useEffect( () => {
        fetch('https://shrieking-pirate-25975.herokuapp.com/clients')
        .then(res => res.json())
        .then(data => setClients(data));
    }, [])
    return (
        <div className="container">
            <h2 className="text-center fw-bold pt-5 pb-4 text-light">Our Clients</h2>
            <div className="row">
                {
                    clients.map(client => <Client key={client._id}
                    client={client}></Client>)
                }
            </div>
        </div>
    );
};

export default OurClients;