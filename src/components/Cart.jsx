import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import { Link } from 'react-router-dom'


const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };  
  return (
    <div className='lg:flex justify-between align-center p-5'>
      <>
        {
          cart.cartItems.length === 0 ? 
          <div className='mx-auto text-center mt-10'>
            <p className='text-3xl'>There are no products in the cart</p>
            <Link className='mt-6 block text-slate-500 text-xl' to={'/'}>Go to Shopping</Link>
          </div> :
        <>
          <div className='flex flex-col gap-y-2'>
        {
          cart.cartItems.map((product) => (
          <div className='card border-2 border-gray-600 rounded-2xl p-3 flex flex-col justify-between bg-white' key={product.id}>
            <img src={product.image} alt={product.title} className='h-[150px] mx-auto'/>
            <div className='text-center mb-3'>
                <p className='text-lg font-bold'>{product.title}</p>
                <p>${product.price}</p>
                <p className='font-bold text-xl'>Total: ${product.price * product.cartQuantity}</p>
            </div>
            <div className='flex justify-between items-center'>
                <button onClick={() => handleDecreaseCart(product)} className='bg-blue-500 text-white rounded-md px-3 py-1'>Remove</button>
                <p className='font-bold text-xl'>{product.cartQuantity}</p>
                <button onClick={() => handleAddToCart(product)} className='bg-blue-500 text-white rounded-md px-3 py-1'>Add</button>
            </div>
          </div>
          ))
        }
      </div>
      <div className='text-center w-[300px] lg:fixed top-25 right-10 mx-auto mt-5'>
        <h3 className='font-bold text-3xl mb-3'>Totals</h3>
        <p className='text-xl'>Total Products: {cart.cartTotalQuantity}</p>
        <p className='text-xl'>Total Products: ${cart.cartTotalAmount}</p>
        <button className='bg-blue-500 px-3 py-1 rounded-md text-white w-full mt-3' onClick={() => handleClearCart()}>Clear Cart</button>
      </div>
        </>
        }
      </>
    </div>
  )
}

export default Cart