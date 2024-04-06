import React from 'react';
import styles from "../../styles/Sidebar.module.scss";

const SidebarFooter = () => {
    return (
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
    );
};

export default SidebarFooter;