const state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hi, how are you?"},
            {id: 2, post: "It's my first post"},
        ]
    },
    dialogsPage: {
        dialogData: [
            {id: 1, name: "Ani"},
            {id: 2, name: "Dina"},
            {id: 3, name: "Mash"},
            {id: 4, name: "Edith"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How r u?"},
            {id: 3, message: "Any news?"},
        ]
    }

}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage
    }
    state.profilePage.posts.push(newPost)
}

export default state