import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {getDialogs} from "../../../../redux/message-reducer";

const mapStateToProps = (state) => {
    return {
        dialogs: state.messages.dialogs
    }
}
const DialogsContainer = connect(mapStateToProps, {getDialogs})(Dialogs);
export default DialogsContainer
