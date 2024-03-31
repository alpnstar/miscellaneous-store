import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Products from "../Products/Products";
import {getCategory} from "../../store/slices/categories/categorySlice";
import styles from "../../styles/Category.module.scss";
import Poster from "../Poster/Poster";

const SingleCategory = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const categoryList = useSelector(state => state.category.list);

    useEffect(() => {
        dispatch(getCategory(id));
    }, [id]);

    return (
        <>
            <Poster/>
            <div className={styles.wrapper}>
                <Products products={categoryList}/>
            </div>
        </>

    );
};

export default SingleCategory;