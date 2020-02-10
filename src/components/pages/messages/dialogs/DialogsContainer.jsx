import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogs: state.messages.dialogs
    }
}
const DialogsContainer = connect(mapStateToProps)(Dialogs);
export default DialogsContainer
