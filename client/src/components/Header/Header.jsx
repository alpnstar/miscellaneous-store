import React from 'react';
import styles from '../../styles/Header.module.scss';
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