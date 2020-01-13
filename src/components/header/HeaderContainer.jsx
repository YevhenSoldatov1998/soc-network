import {connect} from "react-redux";
import HeaderAPI from "./HeaderAPI";
import {getAuthUser} from "../../redux/reducerAuth";

const mapStateToProps = (state) => {
    return {
        header: state.auth
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        call_getAuthUser: (data) => {
            dispatch(getAuthUser(data))
        }
    }

}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);
