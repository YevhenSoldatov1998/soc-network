const GET_VALUE_TEXT = "GET_VALUE_TEXT";
const ADD_POST = "ADD_POST";
const SHOW_FULL_INFORMATION = 'SHOW_FULL_INFORMATION'

export const getValueTextCreator = (text) => ({type: GET_VALUE_TEXT , target: text});
export const addPostCreator = () => ({type: ADD_POST});
export const SHOW_FULL_INFORMATION_CREATOR = () => ({type: SHOW_FULL_INFORMATION})

let initialState = {
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
            allInfo: false
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
const reducerProfile = (state = initialState,action) => {
    switch(action.type){
        case GET_VALUE_TEXT:
            return {...state , textareaValue: action.target}
        case ADD_POST:
            let getLastElement = state.posts[state.posts.length - 1].id;
            let obj = {
                id: getLastElement++,
                src: "https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg",
                text: state.textareaValue,
            };
            if (state.textareaValue) {
                state.textareaValue = ''
                return {...state, posts: [...state.posts, obj]}
            }
            else return state;
        case SHOW_FULL_INFORMATION:
            return {...state ,user: {...state.user , allInfo: !state.user.allInfo}}
        default:
            return state
    }

}
export default reducerProfile
