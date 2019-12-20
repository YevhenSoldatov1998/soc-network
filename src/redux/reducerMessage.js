const TEXT_VALUE_CHANGE = 'TEXT_VALUE_CHANGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

let INITIAL_STATE = {
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
const reducerMessage = (state = INITIAL_STATE , action) => {
    if (action.type === TEXT_VALUE_CHANGE) {
        state.textValue = action.message
    } else if (action.type === SEND_MESSAGE) {
        let elementLastId = state.message[state.message.length - 1].id + 1;
        let obj = {id: elementLastId, message: state.textValue}
        state.message.push(obj)

        state.textValue = "";
    }
    return state
}
export default reducerMessage

export const textValueChangeCreator = body => ({type: TEXT_VALUE_CHANGE, message: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})