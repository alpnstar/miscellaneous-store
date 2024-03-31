import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/BASE_URL";

export const getProductsAll = createAsyncThunk(
    "products/getProductsAll",
    async () => {
        const res = await axios.get(BASE_URL + '/products');
        return res.data;
    }
);
export const getProductsByTitle = createAsyncThunk(
    "products/getProductsByTitle",
    async (title) => {
        const res = await axios.get(BASE_URL + '/products', {
            params: {
                title,
            }
        });
        return res.data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        found: [],
        related: [],
    },
    reducers: {
        filterByPrice(state, {payload}) {

            state.filtered = state.list.filter(i => i.price <= payload);
        },
        getRelatedProducts(state, {payload}) {
            state.related = state.list.filter(({category}) => category.id === payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsAll.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        builder.addCase(getProductsAll.rejected, (state, action) => {
            console.log(action.error);
        })
        builder.addCase(getProductsByTitle.fulfilled, (state, {payload}) => {
            state.found = payload;
        })

    }
});
export const {actions: productsActions, reducer: productsReducer} = productsSlice;