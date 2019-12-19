const GET_VALUE_TEXT = "GET_VALUE_TEXT";
const ADD_POST = "ADD_POST";

const reducerProfile = (state,action) => {
    if (action.type === GET_VALUE_TEXT) {
        state.textareaValue = action.target

    }
    else if (action.type === ADD_POST) {
        let getLastElement = state.posts[state.posts.length - 1].id;
        let obj = {
            id: getLastElement + 1,
            src: "https://icon-library.net/images/cyberpunk-icon/cyberpunk-icon-8.jpg",
            text: state.textareaValue,
        }
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