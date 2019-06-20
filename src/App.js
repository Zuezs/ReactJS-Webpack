import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Navbar from './js/components/Navbar/Navbar';
import Home from './js/components/Home/Home';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>

                </header>
                <Navbar/>
                <Home/>
            </div>
        );
    }
}

export default App;
