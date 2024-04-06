import React from 'react';
import styles from "../../styles/Cart.module.scss";
import {useDispatch} from "react-redux";
import {userActions} from "../../store/slices/user/userSlice";

const CartItemQuantity = ({item}) => {
    const dispatch = useDispatch();

    function changeQuantity(product, quantity) {
        dispatch(userActions.addItemToCart({product, quantity: quantity}));
    }
    const {quantity} = item;
    return (
        <div>
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
        </div>
    );
};

export default CartItemQuantity;