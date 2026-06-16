import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {sendOrder} from "../../../../shared/api/orderApi.js";

const initialState = {
    status: 'default',
    error: null,
}

export const sendOrderThunk = createAsyncThunk(
    'order/send',
    async (orderData, { rejectWithValue }) => {
        try {
            return await sendOrder(orderData)
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message ??
                error.message ??
                'Failed to send order'
            )
        }
    }
)

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrderStatus: (state) => {
            state.status = 'default'
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOrderThunk.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(sendOrderThunk.fulfilled, (state) => {
                state.status = 'success'
            })
        .addCase(sendOrderThunk.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export const {resetOrderStatus} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;