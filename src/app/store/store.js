import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "../../entities/product/model/slice/productSlice.js";
import {categoryReducer} from "../../entities/category/model/slice/categorySlice.js";

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
    }
})