import React from 'react';
import cl from "./Profile.module.css";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    );
};

export default Profile;