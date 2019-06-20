import React, { Component } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Navbar extends Component {

    render() {
        return (
            <div>
                <aside id="colorlib-aside" className="border js-fullheight" style={{height: '808px'}}>
                    <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(&quot;images/about.jpg&quot;)'}}></div>
                        <h1 id="colorlib-logo"><a href="index.html">Tyron Zuezs Allen</a></h1>
                        <span className="email"><i className="icon-mail"></i> Tallenbusiness@gmail.com </span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                <li className=""><a href="#about" data-nav-section="about">About</a></li>
                                <li className=""><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                        <ul>
                            <li>LinkedIn Profile <a href="https://www.linkedin.com/in/tyron-allen-jr-726b56b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                            <li>GitHub Profile <a href="https://github.com/Zuezs" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                            <li>Great JavaScript Article On Data Structures <a href="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'medium']} /></a></li>
                        </ul>
                    </nav>
                    <div className="colorlib-footer">
                        <p>
                            <small>Made with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="beer" />
                            <br/>Thanks <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'google']} /></a> for the inspiration
                            </small>
                        </p>
                        <p>
                            <small>Something coming soon !!</small>
                        </p>
                    </div>
                </aside>
            </div>
        );
    }
}

export default Navbar;