import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useManageAllOrders from '../../hooks/useManageAllOrders';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    //const [allOrders, setAllOrders] = useState([]);
    const [id, setId] = useState('');
    const [value, setValue] = useState('');

    const [allOrders, setAllOrders] = useManageAllOrders();

    /*---------------------
    useEffect( () => {
        fetch('https://shrieking-pirate-25975.herokuapp.com/manage-orders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[allOrders]);
    --------------------- */

    useEffect( () => {
        const url = `https://shrieking-pirate-25975.herokuapp.com/manage-orders/${id}`;
        fetch(url , {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount>0) {
                alert('Update successfull');
            } else{
                alert('Not updated');
            }
            //setValue('Approved');
        })
    }, [id, value]);

    /*const handleUpdate = () => {
        const url = `https://shrieking-pirate-25975.herokuapp.com/manage-orders/${id}`;
        fetch(url , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount>0) {
                alert('Update successfull');
            } else{
                alert('Not updated');
            }
        })
    }*/

    //Cancle an order
    const handleCancleOrder = id => {
        const proceed = window.confirm('Are you sure to cancel the order?');
        if(proceed) {
            const url = `https://shrieking-pirate-25975.herokuapp.com/manage-orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0)
                {
                    alert('Cancelled!!!');
                    const remainingOrders = allOrders.filter(allOrder => allOrder._id !== id);
                    setAllOrders(remainingOrders);
                }                
            })
        }
    } 


    return (
        <Container className="text-center mt-md-4">
            <h2 className="text-light fw-bold pb-4">Manage orders</h2>
            <Table striped bordered hover responsive className="bg-white">
            <thead>
                <tr className="text-primary">
                    <th>Service Name</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allOrders.map( allOrder => <tr key={allOrder._id}>
                        <td>{allOrder.orderedServiceName}</td>
                        <td>{allOrder.userName}</td>
                        <td>{allOrder.userEmail}</td>
                        <td>{allOrder.status}</td>
                        <td>
                            <button className="me-1 mb-1 mb-md-0" value="Approved" onClick={()=> setValue({status:"Approved"})||setId(allOrder?._id)}> <i title="Approve order" className="far fa-check-circle point"></i> </button>
                            
                            <button onClick={() => handleCancleOrder(allOrder?._id)}> <i title="Cancle order" className="far fa-trash-alt point"></i> </button>
                        </td>
                    </tr> )
                }
            </tbody>
            </Table>
        </Container>
    );
};

export default ManageAllOrders;