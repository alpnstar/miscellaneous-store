import React from 'react';
import styles from "../../styles/Products.module.scss";

const ProductsInfo = ({title,price,cat}) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.cat}>{cat}</div>
            <div className={styles.info}>
                <div className={styles.prices}>
                    <div className={styles.price}>{price}$</div>
                    <div className={styles.oldPrice}>
                        {Math.floor(price * 0.8)}$
                    </div>
                </div>

                <div className={styles.purchases}>
                    {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
            </div>
        </div>

    );
};

export default ProductsInfo;