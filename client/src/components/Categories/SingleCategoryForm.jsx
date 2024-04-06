import React from 'react';
import styles from "../../styles/Category.module.scss";

const SingleCategoryForm = ({handleChange}) => {
    return (
        <form className={styles.filters}>
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
        </form>
    );
};

export default SingleCategoryForm;