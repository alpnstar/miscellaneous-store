import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/BASE_URL";

export const getProductsById = createAsyncThunk(
    "products/getProductsById",
    async (id) => {
        const res = await axios.get(BASE_URL + '/products/' + id);
        return res.data;
    },
)
const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: {},
        isLoading: false,
        isRejected: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsById.fulfilled, (state, {payload}) => {
            state.product = payload;
        })
        builder.addCase(getProductsById.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProductsById.rejected, (state) => {
            state.isRejected = true;
            state.isLoading = false;
        })
    }
})
export const {actions: productActions, reducer: productReducer} = productSlice;