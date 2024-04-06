import React from "react";
import {Link} from "react-router-dom";

import styles from "../../styles/Products.module.scss";
import ProductsInfo from "./ProductsInfo";
import ProductsImages from "./ProductsImages";

const Products = ({title, style = {}, products = [], isLoading, isError, amount = 10}) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className={styles.products} style={style}>
            {title && <h2>{title}</h2>}

            <div className={styles.list}>
                {isLoading ? 'Загрузка...' : isError ? 'Ошибка' :
                    list.map(({
                                  id,
                                  images,
                                  title,
                                  category: {name: cat},
                                  price
                              }) => (
                        <Link to={`/products/${id}`} key={id} className={styles.product}>
                            <ProductsImages images={images}/>
                            <ProductsInfo title={title} cat={cat} price={price}/>
                        </Link>
                    ))}
                {}
            </div>
        </section>
    );
};

export default Products;