import {connect} from "react-redux";
import HeaderAPI from "./HeaderAPI";
import {getAuthUser} from "../../redux/reducerAuth";

const mapStateToProps = (state) => {
    return {
        header: state.auth
    }
};


export const HeaderContainer = connect(mapStateToProps, {getAuthUser})(HeaderAPI);
