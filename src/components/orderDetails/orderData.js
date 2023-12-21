import React from 'react'
import '../booksDiv/booksdiv.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const OrderData = () => {
    const {cart} = useSelector((state)=>state.state)
    const params = useParams();
    console.log(cart)
  return (
    <div className='books-div'>
    {
        cart.map((item,index)=>{
            return(
                item.id===params.orderid? <div key={index}>
                <h2>PhoneName: {item.phone_name}</h2>
                <img src={item.phone_image} alt='book-img' />
                <p>{item.phone_model}</p>
                <p>Processor used: {item.phone_processor}</p>
                <span>Price: {item.phone_price}</span>
                </div>:null
            )
        })
    }
    </div>
  )
}

export default OrderData