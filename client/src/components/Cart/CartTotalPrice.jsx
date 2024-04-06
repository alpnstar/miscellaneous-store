import React from 'react';
import styles from "../../styles/Cart.module.scss";
import _ from "lodash";

const CartTotalPrice = ({cart}) => {
    return (
        !cart.length ? (
            <div className={styles.empty}>Here is empty</div>
        ) : (
            <>
                <div className={styles.actions}>
                    <div className={styles.total}>
                        TOTAL PRICE: {_.sumBy(cart, item => item.product.price * item.quantity) + '$'}
                        <span>
              </span>
                    </div>

                    <button className={styles.proceed}>Proceed to checkout</button>
                </div>
            </>
        )
    );
};

export default CartTotalPrice;