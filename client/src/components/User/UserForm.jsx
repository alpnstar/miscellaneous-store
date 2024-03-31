import React from "react";
import {useDispatch, useSelector} from "react-redux";

import UserSignupForm from "./UserSignupForm";
import UserLoginForm from "./UserLoginForm";

import styles from "../../styles/User.module.scss";
import {userActions} from "../../store/slices/user/userSlice";

const UserForm = () => {
    const dispatch = useDispatch();
    const showForm = useSelector(({user}) => user.showForm);
    const formType = useSelector(({user}) => user.formType);

    function closeForm() {
        dispatch(userActions.toggleForm(false));
    }

    function toggleCurrentFormType(payload) {
        dispatch(userActions.toggleFormType(payload));
    }

    return showForm ? (
        <>
            <div className={styles.overlay} onClick={closeForm}/>
            {formType === "signup" ? (
                <UserSignupForm
                    toggleCurrentFormType={toggleCurrentFormType}
                    closeForm={closeForm}
                />
            ) : (
                <UserLoginForm
                    toggleCurrentFormType={toggleCurrentFormType}
                    closeForm={closeForm}
                />
            )}
        </>
    ) : null;
};

export default UserForm;