import React from 'react';
import styles from '../../styles/Sidebar.module.scss';
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({categories = [], amount}) => {
    const pinched = categories.filter((_, i) => i < amount);
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
                <SidebarNav items={pinched}/>
            <SidebarFooter/>
        </section>
    );
};

export default Sidebar;