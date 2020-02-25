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
import {HeaderContainer} from "./components/header/HeaderContainer";
import LoginReduxForm from "./components/pages/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializationApp} from "./redux/init-reducer";
import Preloader from "./components/common/preloader";
import {Suspense, lazy} from 'react';
import {AppState} from "./redux/redux-store";
const ProfileContainer = lazy(() => import(`./components/pages/profile/ProfileContainer`));

type PropsType = {
    initialized: boolean
    InitializationApp: () => void;
};
const App: React.FC<PropsType> = ({InitializationApp, initialized}) => {
    useEffect(() => {
        InitializationApp()
    }, []);
    if (!initialized) {
        return <Preloader />
    }
    return (
        <div>Hello</div>
    )


}

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    InitializationApp: (promise: any) => void
}

let mapStateToProps = (state: AppState): MapStateToPropsType => {
    return {
        initialized: state.init.initialized
    }
}

export default compose(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppState>(mapStateToProps, {InitializationApp}),
    React.memo
)(App);
