import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";

const GET_VALUE_TEXT = "GET_VALUE_TEXT";
const ADD_POST = "ADD_POST";

const TEXT_VALUE_CHANGE = 'TEXT_VALUE_CHANGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
                textValue: 'Hello'
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
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        reducerProfile(this._state.pages.profile , action)
        reducerMessage(this._state.pages.messages , action)
        this._callSubscriber()

    },
}
export const getValueTextCreator = (text) => ({type: GET_VALUE_TEXT , target: text})
export const addPostCreator = () => ({type: ADD_POST})
export const textValueChangeCreator = body => ({type: TEXT_VALUE_CHANGE, message: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

window.store = store
export default store