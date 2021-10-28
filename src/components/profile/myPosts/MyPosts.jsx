import React from 'react';
import Post from "../../Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div>
                <Post message="Hi, how are you?"/>
                <Post message="It's my first post"/>
            </div>
        </div>
    );
};

export default MyPosts;