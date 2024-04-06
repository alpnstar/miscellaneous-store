import React from 'react';
import styles from "../../styles/Cart.module.scss";
import CartItem from "./CartItem";

const CartItems = ({cart}) => {


    return (
        <div className={styles.list}>
            {cart.map((item) => <CartItem item={item}/>)}
        </div>
    );
};

export default CartItems;