import React, { Component } from 'react';
import './MediaQueries.scss';
import './App.scss';

class SideMenu extends Component {
    render() {
        const logo = require('./img/RL_logo2018.svg');
        return(
            <div id="side-menu">
                <div className="fullname-logo">
                    <a href="#">
                        <img src={logo} alt="Rolando Lopantzi logo" className="pic"/>
                    </a>
                </div>
                <div className="site-links">
                    <ul>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideMenu;