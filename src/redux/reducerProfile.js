const GET_VALUE_TEXT = "GET_VALUE_TEXT";
const ADD_POST = "ADD_POST";

let INITIAL_STATE = {
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
}
const reducerProfile = (state = INITIAL_STATE,action) => {
    if (action.type === GET_VALUE_TEXT) {
        state.textareaValue = action.target

    }
    else if (action.type === ADD_POST) {
        let getLastElement = state.posts[state.posts.length - 1].id;
        let obj = {
            id: getLastElement + 1,
            src: "https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg",
            text: state.textareaValue,
        };
        if (state.textareaValue) {
            state.posts.push(obj)
            state.textareaValue = ''
        }
    }
    return state
}
export default reducerProfile

export const getValueTextCreator = (text) => ({type: GET_VALUE_TEXT , target: text})
export const addPostCreator = () => ({type: ADD_POST})