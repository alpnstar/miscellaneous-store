import React from "react";

import styles from "../../styles/Home.module.scss";

import BG from "../../../public/images/computer.png";
import {Link} from "react-router-dom";

const Poster = () => (
    <section className={styles.home}>
        <div className={styles.title}>BIG SALE 20%</div>
        <div className={styles.product}>
            <div className={styles.text}>
                <div className={styles.subtitle}>the bestseller of 2022</div>
                <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
                <Link to='/categories/5'>
                    <button className={styles.button}>Shop Now</button>
                </Link>
            </div>
            <div className={styles.image}>
                <img src={BG} alt="" />
            </div>
        </div>
    </section>
);

export default Poster;