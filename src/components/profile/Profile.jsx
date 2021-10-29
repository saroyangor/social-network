import React from 'react';
import cl from "./Profile.module.css";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts
                posts={props.profileState.posts}
                addPost={props.addPost}
            />
        </main>
    );
};

export default Profile;