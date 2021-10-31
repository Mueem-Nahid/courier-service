import { useEffect, useState } from "react"

const useManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect( () => {
        fetch('https://shrieking-pirate-25975.herokuapp.com/manage-orders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[allOrders]);

    return [allOrders, setAllOrders];
}

export default useManageAllOrders;