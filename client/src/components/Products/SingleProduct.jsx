import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

// import {useGetProductQuery} from "../../features/api/apiSlice";
// import { getRelatedProducts } from "../../features/products/productsSlice";

import {ROUTES} from "../../utils/ROUTES";

// import Product from "./Product";
import Products from "./Products";
import Product from "./Product";
import {getProductsById} from "../../store/slices/products/productSlice";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const list = useSelector(({products}) => products.list);
    const related = useSelector(({products}) => products.related);
    const product = useSelector(({product}) => product);
    useEffect(() => {
        dispatch(getProductsById(id));
    }, []);
    // useEffect(() => {
    //     if (!isFetching && !isLoading && !isSuccess) {
    //         navigate(ROUTES.HOME);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isLoading, isFetching, isSuccess]);

    // useEffect(() => {
    //     if (!data || !list.length) return;
    //
    //     dispatch(getRelatedProducts(data.category.id));
    // }, [data, dispatch, list.length]);

    return product.isLoading ? (
        <section className="preloader">Идет загрузка...</section>
    )
        : product.isRejected ? (
                <section className="preloader">Не найдено</section>
            )
        : (
        <>
            <Product product={product.product}/>
            <Products products={related} amount={5} title="Related products"/>
        </>
    );
};

export default SingleProduct;