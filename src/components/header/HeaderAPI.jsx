import Header from "./Header";
import React from "react";

class HeaderAPI extends React.Component {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

export default HeaderAPI
