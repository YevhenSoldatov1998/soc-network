import {connect} from "react-redux";
import Message from "./Message";
import {sendMessage} from "../../../../redux/message-reducer";

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

const MessageContainer = connect(mapStateToProps, {sendMessage})(Message);
export default MessageContainer
