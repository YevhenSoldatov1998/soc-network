import React from 'react';
import 'normalize.css/normalize.css'
import './App.sass';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Profile from './components/pages/profile/Profile'

class App extends React.Component {
    render() {
        return (
            <main className="wrap-app">
                <Header/>
                <Navbar/>
                <article className="wrap-pages">
                    <Profile/>
                </article>
            </main>
        );
    }
}

export default App;
