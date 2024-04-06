import React, {useState} from 'react';
import styles from "../../styles/Product.module.scss";

const ProductInfo = ({product, sizes, currentSize, setCurrentSize}) => {
    return (
        <>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.price}>{product.price}$</div>
            <div className={styles.color}>
                <span>Color:</span> Green
            </div>
            <div className={styles.sizes}>
                <span>Sizes:</span>

                <div className={styles.list}>
                    {sizes.map((size) => (
                        <div
                            onClick={() => setCurrentSize(size)}
                            className={`${styles.size} ${
                                currentSize === size ? styles.active : ""
                            }`}
                            key={size}
                        >
                            {size}
                        </div>
                    ))}
                </div>
            </div>

            <p className={styles.description}>{product.description}</p>
        </>
    );
};

export default ProductInfo;