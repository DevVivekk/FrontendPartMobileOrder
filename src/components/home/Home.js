import React, { useEffect, useState } from 'react';
import { getBookData } from '../../reduxToolkit/bookslice';
import { useDispatch, useSelector } from 'react-redux';
import BooksDiv from '../booksDiv/BooksDiv';
import './home.css'
const Home = () => {
    const dispatch = useDispatch();
    const {data,loading} = useSelector((state) => state.state);
    const [count,setCount] = useState(2);
    useEffect(() => {
        dispatch(getBookData({item:"",page:count}));
    }, [count,dispatch]);
    const loadmoredata = async(e)=>{
        e.preventDefault();
        setCount((prev)=>{
            return prev+1;
        });
        dispatch(getBookData({page:count}));
    }
    if(loading){
        return(
            <h1>Please take a sip while we fetch Mobile Phones!!</h1>
        )
    }
    return (
        <div className='home-div'>
        <div className='home-books'>
            {
                data&&data.map((item,index)=>{
                    return(
                        <div key={index}>
                        <BooksDiv id={item._id} price={item.phone_price} img={item.phone_image} phone_name={item.phone_name} phone_processor={item.phone_processor} />
                        </div>
                    )
                })
            }
        </div>
        <button onClick={loadmoredata}>Load More</button>
        </div>
    );
};

export default Home;
