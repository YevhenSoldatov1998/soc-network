let store = {
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
                {name: "Yevhen",    id: 2},
                {name: "Alex",      id: 3},
                {name: "Amigo",     id: 4}
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
            ]
        },
        sidebar: {
            navLink: [
                {link: 'Profile',   id: 1},
                {link: 'Messages',  id: 2},
                {link: 'News',      id: 3},
                {link: 'Music',     id: 4},
                {link: 'Setting',   id: 5},
            ]
        }
    },
}
export let addPost = (newPost) => {
    let obj = {
        id: 4,
        src: "https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg",
        text: newPost,
    }
    store.pages.profile.posts.push(obj)
}
export default store