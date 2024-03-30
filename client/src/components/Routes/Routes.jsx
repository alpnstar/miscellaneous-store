import React from 'react';
import {Route, Routes} from "react-router";
import Home from "../Home/Home";
import {ROUTES} from "../../utils/ROUTES";
import SingleProduct from "../Products/SingleProduct";
import SingleCategory from "../Categories/SingleCategory";
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
            <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
            <Route path={ROUTES.PROFILE} element={<Profile/>}/>
            <Route path={ROUTES.CART} element={<Cart/>}/>
        </Routes>
    );
};

export default AppRoutes;