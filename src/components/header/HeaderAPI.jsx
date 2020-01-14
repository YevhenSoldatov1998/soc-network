import Header from "./Header";
import React from "react";
import {authMe} from "../../services/services";

class HeaderAPI extends React.Component {

    componentDidMount() {
        authMe()
            .then(res => {
                let {id,login,email} = res.data.data;
                this.props.getAuthUser(id,login,email)
            })
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

export default HeaderAPI
