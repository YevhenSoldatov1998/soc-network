import MyInfo from "./MyInfo";
import {SHOW_FULL_INFORMATION_CREATOR} from '../../../../redux/reducerProfile'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        user: state.profile.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isShowFullInformation: () => {
            dispatch(SHOW_FULL_INFORMATION_CREATOR())
        }
    }
}
const MyInfoContainer = connect(mapStateToProps, mapDispatchToProps)(MyInfo)
export default MyInfoContainer