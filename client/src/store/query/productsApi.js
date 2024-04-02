import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {buildUrl} from "../../utils/common";
import axios from "axios";

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
            queryFn: async (params) => {
                try {
                    if (!params.title) return {data: undefined};
                    const response = await axios.get(BASE_URL + '/products', {params});
                    return {data: response.data};
                } catch (error) {
                    return {error};
                }


            },
            providesTags: ['products'],
        }),
    })
})
export const {useGetProductsQuery, useGetProductByIdQuery, useGetProductsByTitleQuery} = productsApi