import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg" alt="avatar"/>
            {props.post}
        </div>
    );
};

export default Post;