import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styles from "../../styles/User.module.scss";
import {createUser} from "../../store/slices/user/userSlice";

const UserSignupForm = ({toggleCurrentFormType, closeForm}) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "https://www.gravatar.com/avatar/1cf20df6c375725351e716a1b5aba73c.jpg?s=80&d=wavatar&r=g",
    });

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;
        dispatch(createUser(values));
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

            <div className={styles.title}>Sign Up</div>

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
                        type="name"
                        placeholder="Your name"
                        name="name"
                        value={values.name}
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

                <div className={styles.group}>
                    <input
                        type="avatar"
                        placeholder="Your avatar"
                        name="avatar"
                        value={values.avatar}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div
                    className={styles.link}
                    onClick={() => toggleCurrentFormType("login")}
                >
                    I already have an account
                </div>

                <button type="submit" className={styles.submit}>
                    Create an account
                </button>
            </form>
        </div>
    );
};

export default UserSignupForm;