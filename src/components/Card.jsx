import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

const Card = ({product, k}) => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className='card border-2 border-gray-600 rounded-2xl p-3 flex flex-col justify-between bg-white' key={product.id}>
        <img src={product.image} alt={product.title} className='h-[150px] mx-auto'/>
        <div className='text-center mb-3'>
            <p className='text-lg font-bold'>{product.title}</p>
            <p>${product.price}</p>
        </div>
        <div className='flex justify-between items-center'>
            <Link to={`/product/${product.id}`} className='bg-blue-500 text-white rounded-md px-3 py-1'>Details</Link>
            <button onClick={() => handleAddToCart(product)} className='bg-blue-500 text-white rounded-md px-3 py-1'>Cart</button>
        </div>
    </div>
  )
}

export default Card