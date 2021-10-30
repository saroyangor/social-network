let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, how are you?"},
                {id: 2, post: "It's my first post"},
            ],
            newPostText: "Hello"
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
    },

    _callSubscriber() {
        console.log("fake function")
    },

    getState() {
        return this._state
    },

    setState(value) {
        this._state = value
    },

    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },

    changeNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store