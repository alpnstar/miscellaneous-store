import React from 'react';
import styles from "../../styles/Products.module.scss";

const ProductsImages = ({images=[]}) => {
    return (
        <div
            className={styles.image}
            style={{backgroundImage: `url(${images[0]})`}}
        />

    );
};

export default ProductsImages;