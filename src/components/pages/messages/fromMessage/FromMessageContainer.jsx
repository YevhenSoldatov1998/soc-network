import {connect} from "react-redux";
import FromMessage from "./FromMessage";

const mapStateToProps = (state) => {
    return {
        fromMessage: state.messages.fromMessage
    }
}
const FromMessageContainer = connect(mapStateToProps)(FromMessage)
export default FromMessageContainer