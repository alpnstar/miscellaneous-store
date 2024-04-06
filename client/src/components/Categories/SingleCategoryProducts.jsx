import React from 'react';
import styles from "../../styles/Category.module.scss";
import Products from "../Products/Products";

const SingleCategoryProducts = ({items,handleReset, isEnd, setParams, isLoading, isError}) => {
    return (
        <>
            {isLoading && !items.length ? (
                <div className="preloader">Loading...</div>
            ) : isError || !items.length ? (
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
                            setParams(prev => ({...prev, offset: prev.offset + prev.limit}))
                        }
                    >
                        See more
                    </button>
                </div>
            )}

        </>
    );
};

export default SingleCategoryProducts;