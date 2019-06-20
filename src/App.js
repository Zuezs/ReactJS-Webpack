import React, {Component} from 'react';
import logo from './logo.svg';
import Navbar from './js/components/Navbar/Navbar';
//import Product from './js/components/Products/Products';
import './App.css';
//import ReactDOM from "react-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>

                </header>
                <Navbar/>
                
            </div>
        );
    }
}

export default App;
