import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../api/productApi.js";

const initialState = {
    items: [],
    error: null,
    status: 'default'
}

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            return await getProducts()
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'success'
            state.items = action.payload
        })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload ?? "something went wrong by loading products"
            })
    }
})
export const productReducer = productSlice.reducer