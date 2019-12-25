const TEXT_VALUE_CHANGE = 'TEXT_VALUE_CHANGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const TEXT_VALUE_CHANGE_CREATOR = message => ({type: TEXT_VALUE_CHANGE, message: message});
export const SEND_MESSAGE_CREATOR = () => ({type: SEND_MESSAGE});

let initialState = {
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
}
const reducerMessage = (state = initialState , action) => {
    switch(action.type){
        case TEXT_VALUE_CHANGE:
            return {...state , textValue: action.message};
        case SEND_MESSAGE:
            let elementLastId = state.message[state.message.length - 1].id + 1;
            let obj = {id: elementLastId, message: state.textValue};
            return {...state, message: [...state.message, obj], textValue: ''};
        default:
            return state
    }

}
export default reducerMessage