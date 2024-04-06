import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {buildUrl, clearParams} from "../../utils/common";

export const categoriesApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery(({baseUrl: BASE_URL + '/categories'})),
    endpoints: (builder) => ({
        getCategoryById: builder.query({
            query: (id) => id,
        }),
        getCategories: builder.query({
            query: () => '',
        }),
        getCategoryProducts: builder.query({
            query: (data) => buildUrl(
                data.id + '/products',
                clearParams(data.params, ['offset', 'limit'])
            )
        })
    })
})
export const {useGetCategoryByIdQuery, useGetCategoriesQuery, useGetCategoryProductsQuery} = categoriesApi;