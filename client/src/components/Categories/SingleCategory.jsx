import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Products from "../Products/Products";
import styles from "../../styles/Category.module.scss";
import Poster from "../Poster/Poster";
import {useGetCategoryByIdQuery, useGetCategoryProductsQuery} from "../../store/query/categoriesApi";

const defaultParams = {
    limit: 5,
    offset: 0,
};
const SingleCategory = () => {

    const {id} = useParams();
    const [isEnd, setIsEnd] = useState(true);
    const [params, setParams] = useState(defaultParams);
    const [items, setItems] = useState([]);
    const {data: category} = useGetCategoryByIdQuery(id);
    const {
        data: catProducts,
        error: catProductsError,
        isFetching: catProductsLoading,
    } = useGetCategoryProductsQuery({id, params});


    function handleSubmit() {

    }

    function handleReset() {

    }

    function handleChange() {

    }

    useEffect(() => {
        setItems([]);
        setParams(defaultParams)
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

                <form className={styles.filters} onSubmit={handleSubmit}>
                    <div className={styles.filter}>
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            placeholder="Product name"
                            value={1}
                        />
                    </div>
                    <div className={styles.filter}>
                        <input
                            type="number"
                            name="price_min"
                            onChange={handleChange}
                            placeholder="0"
                            value={1}
                        />
                        <span>Price from</span>
                    </div>
                    <div className={styles.filter}>
                        <input
                            type="number"
                            name="price_max"
                            onChange={handleChange}
                            placeholder="0"
                            value={1}
                        />
                        <span>Price to</span>
                    </div>

                    <button type="submit" hidden/>
                </form>

                {catProductsLoading && !items.length ? (
                    <div className="preloader">Loading...</div>
                ) : catProductsError || !items.length ? (
                    <div className={styles.back}>
                        <span>No results</span>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                ) : (
                    <Products
                        title=""
                        products={items}
                        style={{padding: 0}}
                        amount={items.length}
                    />
                )}
                {!isEnd && (
                    <div className={styles.more}>
                        <button
                            onClick={() =>
                                setParams({...params, offset: params.offset + params.limit})
                            }
                        >
                            See more
                        </button>
                    </div>
                )}
            </section>
        </>

    );
};

export default SingleCategory;
loading_of_products_fixed_&_minor_improvements