import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './checkout.css'
import { useNavigate } from 'react-router-dom';
import { orderProducts } from '../../reduxToolkit/orderedslice';
const CheckOutPage = () => {
    const navigate = useNavigate();
    const {orders} = useSelector((state) => state.state);
    const [sent,setSent] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(orders.length>0 && sent===false){
        dispatch(orderProducts(orders))
        setSent(true);
        }
    },[dispatch,orders,sent]);
    if(orders.length===0){
        return(
            <h1>Please add to cart before you checkout!</h1>
        )
    }
  return (
    <div className='checkout'>
        <h1>You have successfully checked out!</h1>
        <p>Your Order Date: {orders[0].date} :-</p>
        <div className='my-orders'>
        {
            orders&&orders.map((item,index)=>{
                return(
                    <div key={index} className='checkout-orders'>
                    <p>Phone Name: {item.phone_name}</p>
                    <p>Quantity Purchased: {item.quantity}</p>
                    <p>Price: {item.phone_price * item.quantity}</p>
                    <button onClick={()=>navigate(`/orderdata/${item.id}`)}>View Order</button>s
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default CheckOutPage