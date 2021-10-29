import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div>
                {props.posts.map(p=><Post key={p.id} post={p.post}/>)}
            </div>
        </div>
    );
};

export default MyPosts;