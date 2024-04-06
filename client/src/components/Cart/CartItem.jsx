import React from 'react';
import styles from "../../styles/Cart.module.scss";
import {useDispatch} from "react-redux";
import {userActions} from "../../store/slices/user/userSlice";
import CartItemQuantity from "./CartItemQuantity";

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    function removeItem(id) {
        dispatch(userActions.removeItemInCart(id));
    }

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

            <CartItemQuantity item={item}/>
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

};

export default CartItem;