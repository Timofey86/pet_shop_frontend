import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "../../entities/product/model/slice/productSlice.js";
import {categoryReducer} from "../../entities/category/model/slice/categorySlice.js";
import {cartReducer} from "../../entities/cart/model/slice/cartSlice.js";

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
    }
})