import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/BASE_URL";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async () => {
        const res = await axios.get(BASE_URL + '/categories');
        return res.data;
    }
)
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            console.log(action.error);
        })
    }
});
export const {actions: categoriesActions, reducer: categoriesReducer} = categoriesSlice;