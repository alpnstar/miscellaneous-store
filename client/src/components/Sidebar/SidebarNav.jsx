import React from 'react';
import styles from "../../styles/Sidebar.module.scss";
import {NavLink} from "react-router-dom";

const SidebarNav = ({items}) => {
    return (
        <nav>
            <ul className={styles.menu}>
                {items.map(({id, name}) => (
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
    );
};

export default SidebarNav;