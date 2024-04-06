import React from "react";

import styles from "../../styles/Cart.module.scss";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import CartItems from "./CartItems";
import CartTotalPrice from "./CartTotalPrice";

const Cart = () => {
    const cart = useSelector(({user}) => user.cart);

    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Your cart</h2>
            <CartItems cart={cart}/>
            <CartTotalPrice cart={cart}/>
        </section>
    );
};

export default Cart;