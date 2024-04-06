import React from 'react';
import styles from "../../styles/Footer.module.scss";

const FooterRights = () => {
    return (
        <div className={styles.rights}>
            Dev-ed by&nbsp;
            <a href="#" target="_blank" rel="noreferrer">
                Alpnstar
            </a>
        </div>

    );
};

export default FooterRights;