import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Carousel/> <Products/></>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />
      </Routes>
    </>
  )
}

export default App