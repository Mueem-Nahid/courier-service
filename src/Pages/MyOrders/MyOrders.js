import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useMyOrders from '../../hooks/useMyOrders';

const MyOrders = () => {
    
    const [myOrders, setMyOrders] = useMyOrders();

    //Cancle an order
    const handleCancleOrder = id => {
        const proceed = window.confirm('Are you sure to cancel the order?');
        if(proceed) {
            const url = `https://shrieking-pirate-25975.herokuapp.com/my-orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0)
                {
                    alert('Cancelled!!!');
                    const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
                    setMyOrders(remainingOrders);
                }                
            })
        }
    } 

    return (
        <Container className="text-center mt-md-4">
            <h2 className="text-light fw-bold pb-4">My orders</h2>
            <Table striped bordered hover responsive className="bg-white">
            <thead>
                <tr className="text-primary">
                    <th>Service Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    //myOrders.length ? myOrders.map( myOrder => <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder> ) : ''
                    myOrders.length && myOrders.map( myOrder => <tr key={myOrder._id}>
                        <td>{myOrder.orderedServiceName}</td>
                        <td>{myOrder.status}</td>
                        <td>
                            <button onClick={() => handleCancleOrder(myOrder?._id)}> <i title="Cancle order"  className="far fa-trash-alt point">
                            </i> </button> 
                        </td>
                    </tr> )
                }
            </tbody>
            </Table>
        </Container>
    );
};

export default MyOrders;