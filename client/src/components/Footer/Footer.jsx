import React from 'react';
import {ROUTES} from "../../utils/ROUTES";
import styles from '../../styles/Footer.module.scss';
import LOGO from '../../../public/images/logo.svg';
import {Link} from "react-router-dom";
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