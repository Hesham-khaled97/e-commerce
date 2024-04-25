import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsCategoriesFetch } from '../features/categoriesSlice';
import { productsFetch } from '../features/productsSlice';
import Card from './Card';


const Products = () => {
    const [products, setProducts] = useState([]);
    const {itemsCat, statusCat, loadingCat} = useSelector(state => state.categories);
    const {items, status, loading} = useSelector(state => state.products);
    
    const disPatch = useDispatch(); 

    const getAllProducts = () => {
        console.log("clicked");
        setProducts(items);
        disPatch(productsFetch());
    }

    console.log("hi",products);

    const getProductsInCategories = (catName) => {
        console.log(catName);
        catName === "ALL" ? getAllProducts() :
        fetch(`https://fakestoreapi.com/products/category/${catName}`)
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }


    useEffect(() => {
        disPatch(productsCategoriesFetch());
        getAllProducts();
        getProductsInCategories();
    }, [disPatch]);
  return (
    <>
        <div className='bg-slate-50'>
            <div className='text-center text-3xl font-bold py-5'>Products</div>
            <div className='w-full'>
                <select className='mx-auto block border-2 border-gray-600 rounded-md w-60 text-center' onChange={(e) => getProductsInCategories(e.target.value)}>
                    <option>ALL CATEGORIES</option>
                    {
                       itemsCat.map((item) => (
                            <option key={item} value={item}>{item.toUpperCase()}</option>
                        ))
                    }
                </select>
            </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-5 py-9 mx-auto'>
                    {
                         products.length === 0 ? 
                         items.map((product, i) => (
                            <Card product={product} key={product.id}/>
                        )) :
                         products.map((product) => (
                            <Card product={product} key={product.id}/>
                        ))
                    }
                </div>
            </div>
    </>
  );
}

export default Products;