import {connect} from "react-redux";
import {logout} from "../../redux/reducerAuth";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        header: state.auth
    }
};


export const HeaderContainer = connect(mapStateToProps, {logout})(Header);

