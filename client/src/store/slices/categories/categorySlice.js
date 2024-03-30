import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/BASE_URL";

export const getCategory = createAsyncThunk(
    "categories/getCategory",
    async (id) => {
        const res = await axios.get(BASE_URL + '/categories/' + id + '/products');
        return res.data;
    }
)
const categorySlice = createSlice({
    name: 'category',
    initialState: {
        list: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        builder.addCase(getCategory.rejected, (state, action) => {
            console.log(action.error);
        })
    }
});
export const {actions: categoryActions, reducer: categoryReducer} = categorySlice;