import {dialogAPI} from "../services/message";

const SEND_MESSAGE = 'SEND_MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';

const getDialogs = (dialogs) => ({type: GET_DIALOGS, dialogs});

export const getDialogsThunk = () => (dispatch) => {
    dialogAPI.getDialogs().then(res=> {
        debugger
        dispatch(getDialogs())
    })
}
export const sendMessage = (body) => ({type: SEND_MESSAGE, body});


let initialState = {
    message: [
        {id: 1, message: "Hello how are you"},
        {id: 2, message: "Hello!!"},
        {id: 3, message: "I Ok"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Thanks, Fine"}
    ],
    dialogs: [
        {name: "Anastasia", id: 1},
        {name: "Yevhen", id: 2},
        {name: "Alex", id: 3},
        {name: "Amigo", id: 4}
    ],
    textValue: 'Hello'
}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let elementLastId = state.message[state.message.length - 1].id + 1;
            let obj = {id: elementLastId, message: action.body};
            return {...state, message: [...state.message, obj]};
        case GET_DIALOGS:
            return {
                ...state,
                dialogs: [...state.dialogs, [...action.dialogs]]
            }
        default:
            return state
    }

}
export default messageReducer
