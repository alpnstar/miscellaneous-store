import React from "react";
import styles from "../../styles/Profile.module.scss";
import ProfileForm from "./ProfileForm";
import {useSelector} from "react-redux";

const Profile = () => {
    const currentUser = useSelector(({user}) => user.currentUser);
    return (
        <section className={styles.profile}>
            {!currentUser ? (
                <span>You need to log in</span>
            ) : (
                <ProfileForm currentUser={currentUser}/>
            )}
        </section>
    );
};

export default Profile;