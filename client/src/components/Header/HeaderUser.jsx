import React, {useEffect, useState} from 'react';
import styles from "../../styles/Header.module.scss";
import {userActions} from "../../store/slices/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const HeaderUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [account, setAccount] = useState({
        "name": "Guest",
        "avatar": "https://i.pinimg.com/474x/57/9d/27/579d27ca2be7cf205166c6375d706ef9.jpg",
    });
    const user = useSelector(({user}) => user.currentUser);


    useEffect(() => {
        if (user) setAccount(user);
    }, [user]);

    function handleClick() {
        if (!user) dispatch(userActions.toggleForm(true));
        else navigate('/profile');
    }

    return (
        <div onClick={handleClick} className={styles.user}>
            <div className={styles.avatar}
                 style={{backgroundImage: `url(${account.avatar})`}}></div>
            <div className={styles.username}>{account.name}</div>
        </div>

    );
};

export default HeaderUser;