import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const product = action.payload.product;
            const count = action.payload.count ?? 1;

            const cartItem = state.items.find(
                (item) => item.id === product.id
            )
            if (cartItem) {
                cartItem.count += count;
            } else {
                state.items.push({
                    ...product,
                    count
                });
            }
        },
        increaseCartItem: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            )
            if (item) {
                item.count += 1;
            }
        },
        decreaseCartItem: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            )

            if (item && item.count > 1) {
                item.count -= 1;
            }
        },
        removeCartItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const {
    addProductToCart,
    increaseCartItem,
    decreaseCartItem,
    removeCartItem,
    clearCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;