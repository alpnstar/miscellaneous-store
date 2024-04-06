import React from 'react';
import styles from '../../styles/Footer.module.scss';
import FooterSocials from "./FooterSocials";
import Logo from "../UI/Logo/Logo";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo className={styles.logo}/>
            <FooterSocials/>
        </footer>
    );
};

export default Footer;