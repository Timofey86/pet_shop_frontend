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
        }
    }
})

export const {addProductToCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;