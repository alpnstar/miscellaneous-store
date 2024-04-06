import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/ROUTES";
import LOGO from "../../../../public/images/logo.svg";

const Logo = ({className}) => {
    return (
        <div className={className}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="Stuff"/>
            </Link>
        </div>

    );
};

export default Logo;