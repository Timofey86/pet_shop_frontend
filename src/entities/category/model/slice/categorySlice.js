import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCategories} from "../../api/categoryApi.js";

const initialState = {
    items: [],
    error: null,
    status: 'default',
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            return await getCategories();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'success'
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload ?? 'Something went wrong by loading categories';
            })
    }
})
export const categoryReducer = categorySlice.reducer