import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import Products from "./Products";
import Product from "./Product";
import {useGetProductByIdQuery, useGetProductsQuery} from "../../store/query/productsApi";

const SingleProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: products} = useGetProductsQuery();
    const {data: product} = useGetProductByIdQuery(id);
    const relatedProducts = useMemo(() => products && product && products.filter(({category}) => category.id === product.category.id), [products])
    return (
        <>
            {product && <Product product={product}/>}
            <Products products={relatedProducts} amount={5} title="Related products"/>
        </>
    );
};

export default SingleProduct;

