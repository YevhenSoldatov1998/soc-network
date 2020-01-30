import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        header: state.auth
    }
};


export const HeaderContainer = connect(mapStateToProps, {logout})(Header);

