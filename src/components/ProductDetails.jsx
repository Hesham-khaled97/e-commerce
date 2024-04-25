import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  getTotals
} from "../features/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, []);

  return (
    <>
      <div className='text-center mt-10 text-5xl font-bold'>Product Details</div>
      <div className='flex w-[800px] mx-auto mt-40'>
        <div className='img me-5 w-full'>
          <img src={product.image} className=''/>
        </div>
        <div className='relative'>
          <h2 className='font-bold text-3xl mb-10'>{product.title}</h2>
          <p className='leading-7 mb-5'>{product.description}</p>
          <p className='text-slate-600 font-bold'>${product.price}</p>
          <button onClick={() => handleAddToCart(product)} className='bg-blue-500 text-white rounded-md px-7 py-3 absolute right-0'>Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;