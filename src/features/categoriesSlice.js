import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    itemsCat : [],
    statusCat: null,
    loadingCat: false
};

export const productsCategoriesFetch = createAsyncThunk(
    "products/productsCategoriesFetch",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        return response?.data;
    }
)

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching Categories
        builder.addCase(productsCategoriesFetch.pending, (state) => {
            state.statusCat = "Pending",
            state.loadingCat = true
        }),
        builder.addCase(productsCategoriesFetch.fulfilled, (state, action) => {
            state.statusCat = "Success",
            state.loadingCat = false,
            state.itemsCat = action.payload;
        }),
        builder.addCase(productsCategoriesFetch.rejected, (state) => {
            state.statusCat = "Rejected",
            state.loadingCat = false
        })
    }
})

export default categoriesSlice.reducer;