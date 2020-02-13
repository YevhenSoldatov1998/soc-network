import {connect} from "react-redux";
import Message from "./Message";
import {deleteMessage, sendMessage, startDialogs} from "../../../../redux/message-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        isFetching: state.messages.isFetching
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage, deleteMessage, startDialogs}),
    withRouter
)(Message)
