import Header from "./Header";
import React from "react";
import {authMe} from "../../services/services";

class HeaderAPI extends React.Component {

    componentDidMount() {
        authMe()
            .then(res => {
                debugger
                this.props.call_getAuthUser()
            })
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

export default HeaderAPI
