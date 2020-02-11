import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {getDialogs, getMessages} from "../../../../redux/message-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        dialogs: state.messages.dialogs
    }
}
export default compose(
    connect(mapStateToProps, {getDialogs, getMessages}),
    withRouter
)(Dialogs);
