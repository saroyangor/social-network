import React from 'react';
import Post from "./Post/Post";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    const newPostElement = React.createRef()

    function localeAddPost(){
        props.dispatch(addPostAC())
    }

    function onPostChange(){
        props.dispatch(changeNewPostTextAC(newPostElement.current.value))
    }

    return (
        <div>
            My posts
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <button onClick={localeAddPost}>Add post</button>
            </div>
            <div>
                {props.posts.map(p=><Post key={p.id} post={p.post}/>)}
            </div>
        </div>
    );
};

export default MyPosts;