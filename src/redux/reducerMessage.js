const TEXT_VALUE_CHANGE = 'TEXT_VALUE_CHANGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

const reducerMessage = (state , action) => {
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