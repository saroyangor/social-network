import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts
                posts={props.profileState.posts}
                newPostText={props.profileState.newPostText}
                dispatch={props.dispatch}
            />
        </main>
    );
};

export default Profile;