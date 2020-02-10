import {dialogAPI} from "../services/message";

const SEND_MESSAGE = 'SEND_MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';

const getDialogsSuccess = (dialogs) => ({type: GET_DIALOGS, payload: {dialogs}});

export const getDialogs = () => (dispatch) => {
    dialogAPI.getDialogs().then(res => {
        debugger
        dispatch(getDialogsSuccess(res.data))
    })
};

export const sendMessage = (body) => ({type: SEND_MESSAGE, body});


let initialState = {
    dialogs: [],
    message: [
        {id: 1, message: "Hello how are you"},
        {id: 2, message: "Hello!!"},
        {id: 3, message: "I Ok"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Thanks, Fine"}
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
            debugger
            return {
                ...state,
                dialogs: [...state.dialogs, ...action.payload.dialogs]
            }
        default:
            return state
    }

}
export default messageReducer
