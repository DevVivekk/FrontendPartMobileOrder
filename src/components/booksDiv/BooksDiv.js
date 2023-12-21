import React from 'react'
import './booksdiv.css'
import { useDispatch } from 'react-redux'
import { addToCartReducer } from '../../reduxToolkit/bookslice';
const BooksDiv = ({phone_name,img,phone_processor,price,id}) => {
  const dispatch = useDispatch();
  const addToCart = ()=>{
    const obj = {
      id,
      phone_name,
      phone_image:img, //using this as id
      phone_processor,
      phone_price:price
    }
    dispatch(addToCartReducer(obj));
  }
  return (
    <div className='books-div'>
        <h2>{phone_name}</h2>
        <img src={img} alt='book-img' />
        <p>{phone_processor}</p>
        <span>Price: {price}</span>
        <button onClick={(e)=>addToCart(e)}>Add to Cart</button>
    </div>
  )
}

export default BooksDiv