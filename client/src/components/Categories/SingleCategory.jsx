import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Products from "../Products/Products";
import styles from "../../styles/Category.module.scss";
import Poster from "../Poster/Poster";
import {useGetCategoryByIdQuery, useGetCategoryProductsQuery} from "../../store/query/categoriesApi";
import SingleCategoryProducts from "./SingleCategoryProducts";
import SingleCategoryForm from "./SingleCategoryForm";

const defaultValues = {
    price_min: 0,
    price_max: 0,
};
const defaultParams = {
    limit: 5,
    offset: 0,

};
const SingleCategory = () => {

    const {id} = useParams();

    const [isEnd, setIsEnd] = useState(true);
    const [params, setParams] = useState(defaultParams);
    const [values, setValues] = useState(defaultValues);
    const [items, setItems] = useState([]);
    const {data: category} = useGetCategoryByIdQuery(id);
    const {
        data: catProducts,
        error: catProductsError,
        isFetching: catProductsLoading,
    } = useGetCategoryProductsQuery({id, params});


    function handleReset() {
        setValues(defaultValues);
    }

    function handleChange() {

    }

    useEffect(() => {
        setItems([]);
        setParams({...params, ...values})
    }, [values]);
    useEffect(() => {
        setItems([]);
        setParams(defaultParams);
        setValues(defaultValues);
    }, [id]);
    useEffect(() => {
        if (catProducts) {
            setItems(prev => prev.concat(catProducts));
            catProducts.length < 5 ? setIsEnd(true) : setIsEnd(false);
        }
    }, [catProducts]);
    return (
        <>
            <Poster/>
            <section className={styles.wrapper}>
                <h2 className={styles.title}>{category && category.name}</h2>
                <SingleCategoryForm handleChange={handleChange}/>
                <SingleCategoryProducts
                    items={items}
                    handleReset={handleReset}
                    setParams={setParams} isEnd={isEnd}
                    isLoading={catProductsLoading}
                    isError={catProductsError}
                />
            </section>
        </>

    );
};

export default SingleCategory;

