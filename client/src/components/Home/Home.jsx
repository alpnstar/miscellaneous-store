import React, {useMemo} from 'react';
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import {useDispatch, useSelector} from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import {useGetProductsQuery} from "../../store/query/productsApi";
import {categoriesApi, useGetCategoriesQuery} from "../../store/query/categoriesApi";

const FILTER_PRICE = 100;

const Home = () => {
    const dispatch = useDispatch();
    const {
        data: products,
        error: productsError,
        isLoading: productsLoading,
    } = useGetProductsQuery();

    const filtered = useMemo(() =>
        products ? products.filter(i => i.price <= FILTER_PRICE) : [], [products]);

    const {data: categories} = useGetCategoriesQuery();


    ;
    return (
        <>
            <Poster/>
            <Banner/>
            <Products products={filtered} isLoading={productsLoading} isError={productsError} title={'Tranding'}/>
            <Categories categories={categories} title={'Categories '}/>
        </>
    );
};

export default Home;