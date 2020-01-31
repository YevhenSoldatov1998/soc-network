import React, {useEffect} from 'react';
import 'normalize.css/normalize.css'
import './App.sass';
import Messages from "./components/pages/messages/Messages";
import News from "./components/pages/news/News";
import Music from './components/pages/music/Music'
import Setting from './components/pages/setting/Setting'
import {Route, withRouter} from "react-router-dom";
import NavbarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/pages/users/UsersContainer";
import ProfileContainer from "./components/pages/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import LoginReduxForm from "./components/pages/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializationApp} from "./redux/init-reducer";
import Preloader from "./components/common/preloader";


const App = (props) => {
    useEffect(() => {
        props.InitializationApp()
    }, []);

    if (!props.initialized) {
        return <Preloader/>
    }
    console.log('APP')
    return (
        <main className="wrap-app">
            <HeaderContainer/>
            <NavbarContainer/>

            <article className="wrap-pages">
                <Route path="/profile/:userId?"> <ProfileContainer/></Route>
                <Route path="/messages"><Messages/></Route>
                <Route path='/news'> <News/></Route>
                <Route path="/music"> <Music/></Route>
                <Route path="/setting"> <Setting/></Route>
                <Route path="/users"> <UsersContainer/></Route>
                <Route path="/login"> <LoginReduxForm/></Route>
            </article>
        </main>
    );

}

let mapStateToProps = (state) => {
    return {
        initialized: state.init.initialized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {InitializationApp}),
    React.memo
)(App);
