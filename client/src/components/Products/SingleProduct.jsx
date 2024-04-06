import React, {useMemo} from "react";
import {useParams} from "react-router-dom";

import Products from "./Products";
import Product from "./Product";
import {useGetProductByIdQuery, useGetProductsQuery} from "../../store/query/productsApi";

const SingleProduct = () => {
    const {id} = useParams();
    const {data: products} = useGetProductsQuery();
    const {data: product} = useGetProductByIdQuery(id);
    const relatedProducts = useMemo(() =>
        products && product &&
        products.filter(({category}) => category.id === product.category.id), [id, product, products])
    return (
        <>
            {product && <Product product={product}/>}
            <Products products={relatedProducts} amount={5} title="Related products"/>
        </>
    );
};

export default SingleProduct;

