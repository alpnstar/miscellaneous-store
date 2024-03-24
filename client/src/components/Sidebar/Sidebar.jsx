import React, {useEffect} from 'react';
import styles from '../../styles/Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../store/slices/categories/categoriesSlice";

const Sidebar = () => {
    const list = useSelector(state => state.categories.list);

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({id, name}) => (
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