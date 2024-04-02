import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Products from "../Products/Products";
import styles from "../../styles/Category.module.scss";
import Poster from "../Poster/Poster";
import {useGetCategoryProductsQuery} from "../../store/query/categoriesApi";

const SingleCategory = () => {
    const {id} = useParams();
    const {
        data: catProducts,
        error: catProductsError,
        isLoading: catProductsLoading,
        refetch: catProductsRefetch,
    } = useGetCategoryProductsQuery(id);
    return (
        <>
            <Poster/>
            <div className={styles.wrapper}>
                <Products products={catProducts} isLoading={catProductsLoading} isError={catProductsError}/>
            </div>
        </>

    );
};

export default SingleCategory;