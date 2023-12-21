import React, { useEffect, useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import '../home/home.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBookData } from '../../reduxToolkit/bookslice';
const Navbar = () => {
    const {cart} = useSelector((state) => state.state);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [search,setSearch] = useState("");
   const handlechange  = (item)=>{
    dispatch(getBookData({item:item}))
   }
   let timeout;
   useEffect(()=>{
    clearTimeout(timeout);
   timeout = setTimeout(()=>{
    handlechange(search);
  },1000);
  return ()=>clearTimeout(timeout);
},[search])
  return (
    <div className='header-div'>
            <div className='input-div'><input type="text" placeholder='Search phone by name' onChange={(e)=>setSearch(e.target.value)} /></div>
            <div className='header-svg'>
            <CiShoppingCart onClick={()=>navigate("/cart")} size={'4rem'} color='white' />
            <span className='header-cart-no'>{cart.length}</span>
            </div>
        </div>
  )
}

export default Navbar