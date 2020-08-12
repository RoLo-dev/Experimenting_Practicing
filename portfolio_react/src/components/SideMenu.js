import React, { Component } from 'react';
import '../MediaQueries.scss';
import '../App.scss';

class SideMenu extends Component {
    render() {
        const logo = require('../img/RL_logo2018.svg');
        return(
            <div id="side-menu">
                <div className="title-link">
                    <div className="full-name-logo">
                        <a href="index.html">
                            <img src={logo} alt="Rolando Lopantzi logo" className="pic"/>
                        </a>
                    </div>
                    <div className="site-links">
                        <ul>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="social-media-links">
                    <ul>
                        <li>
                            <a href="https://github.com/RoLo-dev" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rolando-lopantzi-87326b74/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:rlopantzi@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideMenu;