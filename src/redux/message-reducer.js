import {dialogAPI, messageAPI} from "../services/message";
import {reset} from 'redux-form';

//CONSTANTS
const SEND_MESSAGE = 'SEND_MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';
const GET_MESSAGES = 'GET_MESSAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const START_DIALOG = 'START_DIALOG';

//ACTION TYPES


//ACTION CREATOR
const getDialogsSuccess = (dialogs) => ({type: GET_DIALOGS, payload: {dialogs}});
const getMessageSuccess = (messages) => ({type: GET_MESSAGES, payload: {messages}});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const sendMessageSuccess = (body) => ({type: SEND_MESSAGE, body});
const deleteMessageSuccess = () => ({type: DELETE_MESSAGE});
const startDialogSuccess = (userId) => ({type: START_DIALOG, userId});

//ACTION THUNK
export const getDialogs = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dialogAPI.getDialogs().then(data => {
        dispatch(getDialogsSuccess(data));
        dispatch(toggleIsFetching(false));
    })
};
export const getMessages = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    messageAPI.getMessages(userId).then(data => {
        dispatch(getMessageSuccess(data.items));
        dispatch(toggleIsFetching(false));

    })
}
export const sendMessage = (userId, body) => dispatch => {
    messageAPI.sendMessage(userId, body).then(data => {
        dispatch(sendMessageSuccess(data.data.message));
        dispatch(reset('messages'));
    })
}
export const deleteMessage = (messageId, userId) => (dispatch) => {
    messageAPI.deleteMessage(messageId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(deleteMessageSuccess());
            dispatch(getMessages(userId))
        }
    })
}
export const startDialogs = (userId) => dispatch => {
    dialogAPI.startDialog(userId).then(res =>{
        dispatch(startDialogSuccess(userId))
    })
}

// STATE TYPE

// INITIAL STATE
let initialState = {
    dialogs: [],
    messages: [],
    isFetching: false
}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS:
            return {
                ...state,
                ...action.payload
            }
        case GET_MESSAGES:
            return {
                ...state,
                ...action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {...action.body}]
            }
        case DELETE_MESSAGE:
            return {...state};
        case START_DIALOG:
            return {
                ...state,
                dialogs: [...state.dialogs.filter(el=> el.id == action.userId), ...state.dialogs.filter(el=> el.id != action.userId)]
            }
        default:
            return state
    }

}
export default messageReducer
