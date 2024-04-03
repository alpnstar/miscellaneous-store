import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {buildUrl} from "../../utils/common";

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL + '/products'}),
    tagTypes: ['products', 'product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '',
            providesTags: ['products'],
        }),
        getProductById: builder.query({
            query: (id) => id,
            providesTags: ['product'],
        }),
        getProductsByTitle: builder.query({
            query: (params) => buildUrl(BASE_URL + '/products', params),
            providesTags: ['products'],
        }),
    })
})
export const {useGetProductsQuery, useGetProductByIdQuery, useGetProductsByTitleQuery} = productsApi

