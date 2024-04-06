import React from 'react';
import styles from "../../styles/Product.module.scss";
import {userActions} from "../../store/slices/user/userSlice";
import {useDispatch} from "react-redux";

const ProductActions = ({currentSize}) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(userActions.addItemToCart({product, quantity: 1}));
    };
    return (
        <>
            <div className={styles.actions}>
                <button
                    onClick={addToCart}
                    className={styles.add}
                    disabled={!currentSize}
                >
                    Add to cart
                </button>
                <button className={styles.favourite}>Add to favourites</button>
            </div>
        </>
    );
};

export default ProductActions;