const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (body) => ({type: SEND_MESSAGE, body});

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
const messageReducer = (state = initialState , action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let elementLastId = state.message[state.message.length - 1].id + 1;
            let obj = {id: elementLastId, message: action.body};
            return {...state, message: [...state.message, obj]};
        default:
            return state
    }

}
export default messageReducer
