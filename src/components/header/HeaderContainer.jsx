import {connect} from "react-redux";
import HeaderAPI from "./HeaderAPI";
import {authMeThunk} from "../../redux/reducerAuth";

const mapStateToProps = (state) => {
    return {
        header: state.auth
    }
};


export const HeaderContainer = connect(mapStateToProps, {authMeThunk})(HeaderAPI);
