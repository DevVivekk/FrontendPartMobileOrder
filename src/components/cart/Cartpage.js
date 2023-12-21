import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartsComp from './CartComp';
import { checkOut, emptyCart } from '../../reduxToolkit/bookslice';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
    const {cart} = useSelector((state) => state.state);
    const totalPrice = cart.reduce((acc,curr)=>(acc+curr.quantity*curr.phone_price),0)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkmeOuT = ()=>{
      dispatch(checkOut())
      navigate("/checkout")
    }
  return (
    <div>
    {
        cart.map((item,index)=>{
            return(
                <div key={index}>
                <CartsComp item={item} />
                </div>
            )
        })
    }
    <h2>Total Price: {totalPrice}</h2>
    <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
    <button onClick={checkmeOuT}>Checkout</button>
    </div>
  )
}

export default Cartpage