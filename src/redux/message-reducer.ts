import {dialogAPI, messageAPI} from "../services/message";
import {reset} from 'redux-form';

//CONSTANTS
const SEND_MESSAGE = 'SEND_MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';
const GET_MESSAGES = 'GET_MESSAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const START_DIALOG = 'START_DIALOG';


// ACTION TYPE

type GetDialogsSuccessActionType = {
    type: typeof GET_DIALOGS,
    payload: any
}
type GetMessageSuccessActionType = {
    type: typeof GET_MESSAGES
    payload: any
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type SendMessageSuccessActionType = {
    type: typeof SEND_MESSAGE
    body: any
}
type DeleteMessageSuccessActionType = {
    type: typeof DELETE_MESSAGE
}
type StartDialogSuccessActionType = {
    type: typeof START_DIALOG
    userId: string
}

//ALL ACTION
type ActionAllTypes = GetDialogsSuccessActionType
    | GetMessageSuccessActionType
    | ToggleIsFetchingActionType
    | SendMessageSuccessActionType
    | DeleteMessageSuccessActionType
    | StartDialogSuccessActionType

//ACTION CREATOR
const getDialogsSuccess = (dialogs: Array<any>): GetDialogsSuccessActionType => ({type: GET_DIALOGS, payload: {dialogs}});
const getMessageSuccess = (messages:  Array<any>): GetMessageSuccessActionType => ({type: GET_MESSAGES, payload: {messages}});
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
const sendMessageSuccess = (body: any): SendMessageSuccessActionType => ({type: SEND_MESSAGE, body});
const deleteMessageSuccess = (): DeleteMessageSuccessActionType => ({type: DELETE_MESSAGE});
const startDialogSuccess = (userId: string): StartDialogSuccessActionType => ({type: START_DIALOG, userId});

//ACTION THUNK
export const getDialogs = () => (dispatch:any) => {
    dispatch(toggleIsFetching(true));
    dialogAPI.getDialogs().then((data:any) => {
        dispatch(getDialogsSuccess(data));
        dispatch(toggleIsFetching(false));
    })
};
export const getMessages = (userId: string) => (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    messageAPI.getMessages(userId).then((data:any) => {
        dispatch(getMessageSuccess(data.items));
        dispatch(toggleIsFetching(false));

    })
}
export const sendMessage = (userId: number, body: any) => (dispatch:any) => {
    messageAPI.sendMessage(userId, body).then((data:any) => {
        dispatch(sendMessageSuccess(data.data.message));
        dispatch(reset('messages'));
    })
}
export const deleteMessage = (messageId: string, userId: string) => (dispatch: any) => {
    messageAPI.deleteMessage(messageId).then((res:any) => {
        if (res.data.resultCode === 0) {
            dispatch(deleteMessageSuccess());
            dispatch(getMessages(userId))
        }
    })
}
export const startDialogs = (userId: string) => (dispatch:any) => {
    dialogAPI.startDialog(userId).then((res:any) =>{
        dispatch(startDialogSuccess(userId))
    })
}

// STATE TYPE
type InitialStateType = {
    dialogs: Array<any>
    messages: Array<any>
    isFetching: boolean
}

// INITIAL STATE
let initialState: InitialStateType = {
    dialogs: [],
    messages: [],
    isFetching: false
};

//REDUCER
const messageReducer = (state = initialState, action: ActionAllTypes): InitialStateType => {
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
