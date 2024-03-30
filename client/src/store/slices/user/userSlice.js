import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/BASE_URL";

export const createUser = createAsyncThunk(
    'user/createUser',
    async (payload) => {
        const res = await axios.post(BASE_URL + '/users', payload);
        return res.data;
    }
);
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({onStart, payload}) => {
        let token;
        if (onStart) token = JSON.parse(localStorage.getItem('authToken'));
        else {
            token = await axios.post(BASE_URL + '/auth/login', payload);
            localStorage.setItem('authToken', JSON.stringify({data: token.data}));
        }
        if (token) {
            const userData = await axios(BASE_URL + '/auth/profile', {
                headers: {
                    Authorization: `Bearer ${token.data.access_token}`,
                }
            })
            return userData.data;
        }
        return null;
    }
);
export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (payload) => {
        const res = await axios.put(BASE_URL + '/users/' + payload.id, {...payload.data})
        return res.data;
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        cart: [],
        totalCartQuantity: 0,
        isLoading: false,
        formType: "signup",
        showForm: false,
    },
    reducers: {
        addItemToCart: (state, {payload}) => {
            const search = state.cart.findIndex(item => item.product.id === payload.product.id);
            if (search !== -1) {
                const item = state.cart[search];
                state.cart[search] = {
                    ...item,
                    quantity: payload.quantity,
                }
            } else state.cart.push({
                quantity: payload.quantity,
                product: {
                    ...payload.product,
                }
            })
        },
        removeItemInCart: (state, {payload}) => {
            state.cart = state.cart.filter(item => item.product.id !== payload);
        },
        getCart: (state, {payload}) => {
            state.cart = JSON.parse(localStorage.getItem('cart')) || [];
        },
        setCart: (state, {payload}) => {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        setCartTotalQuantity: (state, {payload}) => {
            state.totalCartQuantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
        },
        toggleForm: (state, {payload}) => {
            state.showForm = payload;
        },
        toggleFormType: (state, {payload}) => {
            state.formType = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        })
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        })
        builder.addCase(updateUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        })
    }
})
export const {actions: userActions, reducer: userReducer} = userSlice;