import Header from "./Header";
import React from "react";
import * as axios from "axios";

class HeaderAPI extends React.Component {
    state = {
        isMode: false
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',   {
            withCredentials: true
        })
            .then(res => {
                debugger
            })
    }

    render() {
        return <>
            {this.state.isMode && <Header {...this.props} />}

        </>
    }
}

export default HeaderAPI