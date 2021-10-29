import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const newPostElement = React.createRef()

    function localeAddPost(){
        props.addPost(newPostElement)
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement}/>
                <button onClick={localeAddPost}>Add post</button>
            </div>
            <div>
                {props.posts.map(p=><Post key={p.id} post={p.post}/>)}
            </div>
        </div>
    );
};

export default MyPosts;