const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                post: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: ADD_POST}
}
export const changeNewPostTextAC = (newPostText) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPostText
    }
}

export default profileReducer