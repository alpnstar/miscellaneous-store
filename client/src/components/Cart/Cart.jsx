import React from "react";

import styles from "../../styles/Cart.module.css";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../store/slices/user/userSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(({user}) => user.cart);

    function changeQuantity(product, quantity) {
        dispatch(userActions.addItemToCart({product, quantity: quantity}));
    }

    console.log(cart);

    function cartSum(cart) {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }

    function removeItem(id) {
        dispatch(userActions.removeItemInCart(id));
    }

    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Your cart</h2>

            {!cart.length ? (
                <div className={styles.empty}>Here is empty</div>
            ) : (
                <>
                    <div className={styles.list}>
                        {cart.map((item) => {
                            const {title, category, images, price, id} = item.product;
                            const {quantity} = item;
                            return (
                                <div className={styles.item} key={id}>
                                    <div
                                        className={styles.image}
                                        style={{backgroundImage: `url(${images[0]})`}}
                                    />
                                    <div className={styles.info}>
                                        <h3 className={styles.name}>{title}</h3>
                                        <div className={styles.category}>{category.name}</div>
                                    </div>

                                    <div className={styles.price}>{price}$</div>

                                    <div className={styles.quantity}>
                                        <div
                                            className={styles.minus}
                                            onClick={() =>
                                                changeQuantity(item.product, Math.max(1, quantity - 1))
                                            }
                                        >
                                            <svg className="icon">
                                                <path
                                                    d="M15.4895 8.3125H3.51055C2.8834 8.3125 2.375 8.84316 2.375 9.5C2.375 10.1568 2.8834 10.6875 3.51055 10.6875H15.4895C16.1166 10.6875 16.625 10.1568 16.625 9.5C16.625 8.84316 16.1166 8.3125 15.4895 8.3125Z"></path>
                                            </svg>
                                        </div>

                                        <span>{quantity}</span>

                                        <div
                                            className={styles.plus}
                                            onClick={() =>
                                                changeQuantity(item.product, Math.max(1, quantity + 1))
                                            }
                                        >
                                            <svg className="icon">

                                                <g clipPath="url(#clip0_103_316)">
                                                    <path
                                                        d="M13.125 6.5625H8.4375V1.875C8.4375 1.3575 8.0175 0.9375 7.5 0.9375C6.9825 0.9375 6.5625 1.3575 6.5625 1.875V6.5625H1.875C1.3575 6.5625 0.9375 6.9825 0.9375 7.5C0.9375 8.0175 1.3575 8.4375 1.875 8.4375H6.5625V13.125C6.5625 13.6425 6.9825 14.0625 7.5 14.0625C8.0175 14.0625 8.4375 13.6425 8.4375 13.125V8.4375H13.125C13.6425 8.4375 14.0625 8.0175 14.0625 7.5C14.0625 6.9825 13.6425 6.5625 13.125 6.5625Z"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_103_316">
                                                        <rect width="15" height="15" fill="white"></rect>
                                                    </clipPath>
                                                </defs>

                                            </svg>
                                        </div>
                                    </div>

                                    <div className={styles.total}>{price * quantity}$</div>

                                    <div
                                        className={styles.close}
                                        onClick={() => removeItem(item.product.id)}
                                    >
                                        <svg className="icon">
                                            <path d="M4.375 4.375L15.625 15.625" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M4.375 15.625L15.625 4.375" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.actions}>
                        <div className={styles.total}>
                            TOTAL PRICE: {cartSum(cart) + '$'}
                            <span>
              </span>
                        </div>

                        <button className={styles.proceed}>Proceed to checkout</button>
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;