import React from 'react';
import 'normalize.css/normalize.css'
import './App.sass';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Profile from './components/pages/profile/Profile'
import Messages from "./components/pages/messages/Messages";
import {BrowserRouter as Router, Route} from "react-router-dom";
import News from "./components/pages/news/News";
import Music from './components/pages/music/Music'
import Setting from './components/pages/setting/Setting'

class App extends React.Component {
    render() {
        return (
            <Router>
                <main className="wrap-app">
                    <Header/>
                    <Navbar/>
                    <article className="wrap-pages">
                        <Route exact path="/"><Profile posts={this.props.data.pages.profile.posts}/>
                        </Route>
                        <Route path="/messages"><Messages  messages={this.props.data.pages.messages}/>
                        </Route>
                        <Route path='/news'><News/>
                        </Route>
                        <Route path="/music"><Music/>
                        </Route>
                        <Route path="/setting"><Setting/>
                        </Route>
                    </article>
                </main>
            </Router>
        );
    }
}

export default App;
