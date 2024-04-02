import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";

export const categoriesApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery( ({baseUrl: BASE_URL + '/categories'})),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '',
        }),
        getCategoryProducts: builder.query({
            query: (id) => id +'/products',
        })
    })
})
export const {useGetCategoriesQuery, useGetCategoryProductsQuery} = categoriesApi;