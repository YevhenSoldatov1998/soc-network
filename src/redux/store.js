let store = {
    _state: {
        pages: {
            messages: {
                message: [
                    {id: 1, message: "Hello how are you"},
                    {id: 2, message: "Hello!!"},
                    {id: 3, message: "I Ok"},
                    {id: 4, message: "How are you?"},
                    {id: 5, message: "Thanks, Fine"}
                ],
                fromMessage: [
                    {name: "Anastasia", id: 1},
                    {name: "Yevhen", id: 2},
                    {name: "Alex", id: 3},
                    {name: "Amigo", id: 4}
                ],
            },
            profile: {
                user: {
                    userName: {
                        firstName: "Yevhen",
                        lastName: "Soldatov"
                    },
                    userInfo: [
                        {
                            id: 1,
                            nameInfo: 'Hometown',
                            info: 'Lviv',
                        },
                        {
                            id: 2,
                            nameInfo: 'Birthday',
                            info: '26.05.2019',
                        },
                        {
                            id: 3,
                            nameInfo: 'Place work',
                            info: 'Home',
                        }
                    ],
                },
                posts: [
                    {
                        id: 1,
                        src: "https://cdn.iconscout.com/wordpress/2018/01/cyberpunk-girl-infographic-element-by-csaba-gyulai.png",
                        text: "I love this page!!!)"
                    },
                    {
                        id: 2,
                        src: "https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg",
                        text: "Hi!!! How are you?)"
                    },
                    {
                        id: 3,
                        src: "https://cdn.iconscout.com/wordpress/2018/01/cyberpunk-girl-infographic-element-by-csaba-gyulai.png",
                        text: "I am OK!!)"
                    },
                ],
                textareaValue: 'some text'
            },
            sidebar: {
                navLink: [
                    {link: 'Profile', id: 1},
                    {link: 'Messages', id: 2},
                    {link: 'News', id: 3},
                    {link: 'Music', id: 4},
                    {link: 'Setting', id: 5},
                ]
            }
        },
    },
    getState(value) {
        return this._state
    },
    getValueText(value) {
        let {profile} = this.state.pages
        profile.textareaValue = value
        this._callSubscriber()
    },
    addPost(newPost) {
        let {profile} = this._state.pages
        let getLastElement = profile.posts[profile.posts.length - 1].id;
        let obj = {
            id: getLastElement + 1,
            src: "https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg",
            text: profile.textareaValue,
        }
        if (profile.textareaValue) {
            profile.posts.push(obj)
            profile.textareaValue = ''
        }
        this._callSubscriber()
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }

}
window.store = store
export default store