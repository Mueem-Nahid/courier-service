import React from 'react';

const Client = (props) => {
    const {name, img, comment} = props.client;
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="">
            <div className="card-thumbnail text-center">
                <img src={img} className="my-img rounded-circle" alt=""/>
            </div>
            <h4 className="mt-2 text-light text-center">{name}</h4>
            <p className="text-dark text-center">{comment}</p>
            </div>
        </div>
    );
};

export default Client;