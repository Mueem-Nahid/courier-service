import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useMyOrders = () => {
    const {email} = useParams();
    const [myOrders, setMyOrders] = useState({});

    useEffect( () => {
        const url = `https://shrieking-pirate-25975.herokuapp.com/my-orders/user/${email}`;    
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, []);

    return [myOrders, setMyOrders];
};

export default useMyOrders;