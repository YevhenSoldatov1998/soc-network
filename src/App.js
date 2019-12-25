import React from 'react';
import 'normalize.css/normalize.css'
import './App.sass';
import Header from "./components/header/Header";
import Profile from './components/pages/profile/Profile'
import Messages from "./components/pages/messages/Messages";
import News from "./components/pages/news/News";
import Music from './components/pages/music/Music'
import Setting from './components/pages/setting/Setting'
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavbarContainer from "./components/navbar/NavbarContainer";

const App = () => {
    return (
        <Router>
            <main className="wrap-app">
                <Header/>
                <NavbarContainer/>
                <article className="wrap-pages">
                    <Route exact path="/"> <Profile/></Route>
                    <Route path="/messages"><Messages/></Route>
                    <Route path='/news'> <News/></Route>
                    <Route path="/music"> <Music/></Route>
                    <Route path="/setting"> <Setting/></Route>
                </article>
            </main>
        </Router>
    );
}

export default App;
