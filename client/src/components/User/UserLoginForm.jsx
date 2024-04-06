import React, {useState} from "react";
import {useDispatch} from "react-redux";

import styles from "../../styles/User.module.scss";
import {loginUser} from "../../store/slices/user/userSlice";

const UserLoginForm = ({toggleCurrentFormType, closeForm}) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;

        dispatch(loginUser({payload: values}));
        closeForm();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className="icon">
                    <path d="M4.375 4.375L15.625 15.625" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"></path>
                    <path d="M4.375 15.625L15.625 4.375" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"></path>

                </svg>
            </div>

            <div className={styles.title}>Log In</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        value={values.email}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        type="password"
                        placeholder="Your password"
                        name="password"
                        value={values.password}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div
                    onClick={() => toggleCurrentFormType("signup")}
                    className={styles.link}
                >
                    Create an account
                </div>

                <button type="submit" className={styles.submit}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default UserLoginForm;