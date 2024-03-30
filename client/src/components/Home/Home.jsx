import React, {useEffect} from 'react';
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import {useDispatch, useSelector} from "react-redux";
import {getProductsAll, productsActions} from "../../store/slices/products/productsSlice";
import Categories from "../Categories/Categories";
import {getCategories} from "../../store/slices/categories/categoriesSlice";
import Banner from "../Banner/Banner";

const FILTER_PRICE = 100;

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getProductsAll());
        dispatch(getCategories());
    }, []);
    useEffect(() => {
        if (!products.list.length) return;
        dispatch(productsActions.filterByPrice(FILTER_PRICE));
    }, [products.list]);
    return (
        <>
            <Poster/>
            <Banner/>
            <Products products={products.filtered} title={'Tranding'}/>
            <Categories categories={categories.list} title={'Categories '}/>
        </>
    );
};

export default Home;