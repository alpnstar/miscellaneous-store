import {configureStore} from "@reduxjs/toolkit";
import {categoriesReducer} from "./slices/categories/categoriesSlice";
import {productsReducer} from "./slices/products/productsSlice";
import {productReducer} from "./slices/products/productSlice";
import {categoryReducer} from "./slices/categories/categorySlice";
import {userReducer} from "./slices/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        categories: categoriesReducer,
        category: categoryReducer,
        products: productsReducer,
        product: productReducer,
    },
})