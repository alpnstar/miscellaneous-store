import React, {useEffect, useState} from 'react';
import styles from "../../styles/Profile.module.scss";
import {useDispatch} from "react-redux";
import {updateUser} from "../../store/slices/user/userSlice";

const ProfileForm = ({currentUser}) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        avatar: '',
    });

    useEffect(() => {
        currentUser && setValues(currentUser);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateUser({id: currentUser.id, data: values}));
    }

    function handleChange(e) {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
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

            <button type="submit" className={styles.submit}>
                Update
            </button>
        </form>

    );
};

export default ProfileForm;