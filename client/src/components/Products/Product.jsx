import React, {useState} from "react";
import {Link} from "react-router-dom";

import {ROUTES} from "../../utils/ROUTES";

import styles from "../../styles/Product.module.scss";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductActions";

const SIZES = [4, 4.5, 5];

const Product = ({product}) => {
    const [currentSize, setCurrentSize] = useState();

    return (
        <section className={styles.product}>
            <ProductImages images={product.images}/>
            <div className={styles.info}>
                <ProductInfo product={product}
                             currentSize={currentSize}
                             setCurrentSize={setCurrentSize}
                             sizes={SIZES}/>
                <ProductActions currentSize={currentSize}/>
                <div className={styles.bottom}>
                    <div className={styles.purchase}>19 people purchased</div>

                    <Link to={ROUTES.HOME}>Return to store</Link>
                </div>
            </div>
        </section>
    );
};

export default Product;