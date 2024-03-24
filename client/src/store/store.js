import {configureStore} from "@reduxjs/toolkit";
import {categoriesReducer} from "./slices/categories/categoriesSlice";
import {productsReducer} from "./slices/products/productsSlice";
import {productReducer} from "./slices/products/productSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        product: productReducer,
    },
})