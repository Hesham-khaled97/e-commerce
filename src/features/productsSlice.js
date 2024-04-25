import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    items : [],
    status: null,
    loading: false
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response?.data;
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Products
        builder.addCase(productsFetch.pending, (state) => {
            state.status = "Pending",
            state.loading = true
        }),
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "Success",
            state.loading = false,
            state.items = action.payload;
        }),
        builder.addCase(productsFetch.rejected, (state) => {
            state.status = "Rejected",
            state.loading = false
        })
    }
})

export default productsSlice.reducer;