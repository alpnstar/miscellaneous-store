import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user/userSlice";
import {productsApi} from "./query/productsApi";
import {categoriesApi} from "./query/categoriesApi";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(
                productsApi.middleware,
                categoriesApi.middleware
            )
})