import React, {useEffect, useState} from 'react';
import styles from '../../styles/Header.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/ROUTES";
import LOGO from '../../../public/images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../store/slices/user/userSlice";
import {useGetProductsByTitleQuery} from "../../store/query/productsApi";
import HeaderUser from "./HeaderUser";
import HeaderSearch from "./HeaderSearch";
import HeaderLinks from "./HeaderLinks";
import Logo from "../UI/Logo/Logo";

const Header = () => {


    return (
        <header className={styles.header}>
           <Logo className={styles.logo}/>
            <div className={styles.info}>
                <HeaderUser/>
                <HeaderSearch/>
                <HeaderLinks/>
            </div>
        </header>
    );
};

export default Header;