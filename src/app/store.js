import {configureStore} from '@reduxjs/toolkit';
import productsSlice from '../features/productsSlice';
import categoriesSlice from '../features/categoriesSlice';
import cartSlice from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        products : productsSlice,
        categories : categoriesSlice,
        cart : cartSlice
    }
});

