import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {

    render() {
        return (
            <nav className='navbar'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </nav>
        );
    }
}

export default Navbar;