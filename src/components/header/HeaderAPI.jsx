import Header from "./Header";
import React from "react";
import * as axios from "axios";

class HeaderAPI extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',   {
            withCredentials: true,
            headers: {
                "API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"
            }
        })
            .then(res => {
                debugger
            })
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

export default HeaderAPI