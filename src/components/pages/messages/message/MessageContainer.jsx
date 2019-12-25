import {connect} from "react-redux";
import Message from "./Message";
import {TEXT_VALUE_CHANGE_CREATOR, SEND_MESSAGE_CREATOR} from "../../../../redux/reducerMessage";

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        textValueChange: (message) => {
            dispatch(TEXT_VALUE_CHANGE_CREATOR(message))
        },
        sendMessage: () => {
            dispatch(SEND_MESSAGE_CREATOR())
        }

    }
};
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
export default MessageContainer
