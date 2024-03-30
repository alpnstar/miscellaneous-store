import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = ({categories, amount}) => {
    const pinched = categories.filter((_, i) => i < amount);
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {pinched.map(({id, name}) => (
                        <li key={id}>
                            <NavLink
                                className={({isActive}) =>
                                    `${styles.link} ${isActive ? styles.active : ""}`
                                }
                                to={`/categories/${id}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.footer}>
                <a href="/help" target="_blank" className={styles.link}>
                    Help
                </a>
                <a
                    href="/terms"
                    target="_blank"
                    className={styles.link}
                    style={{textDecoration: "underline"}}
                >
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
};

export default Sidebar;