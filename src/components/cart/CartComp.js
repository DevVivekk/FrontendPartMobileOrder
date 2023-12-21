import React from 'react'
import './cartcomp.css'
import { useDispatch } from 'react-redux'
import { removeToCart,incrementProduct,decrementProduct } from '../../reduxToolkit/bookslice';
const CartsComp = ({item}) => {
    const dispatch = useDispatch();
    const deleteitem = ()=>{
        dispatch(removeToCart(item.phone_image))
    }
    const incrementProductt = ()=>{
        dispatch(incrementProduct(item.phone_image))
    }
    const decrementProductt = ()=>{
        dispatch(decrementProduct(item.phone_image))
    }
  return (
    <div className='carts-comp'>
        <img src={item.phone_image} alt='book-img' />
        <span>Price: {item.phone_price * item.quantity}</span>
        <div className='incre-cart-buttons'>
        <button onClick={incrementProductt}>+</button>
        <button onClick={decrementProductt}>-</button>
        </div>
        <span>Quanity: {item.quantity}</span>
        <button onClick={deleteitem}>Delete item</button>
    </div>
  )
}

export default CartsComp