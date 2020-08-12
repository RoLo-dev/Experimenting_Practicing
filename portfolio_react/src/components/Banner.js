import React, { Component } from 'react';
import '../MediaQueries.scss';
import '../App.scss';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Banner extends Component {
    render() {
        const logo = require('../img/RL_favicon-2018.png');
        return(
            <Router>
                <div className="banner">
                    <header className="main-header">
                        <div className="wrapper header-container">

                            <Link className="title" to="/" exact>
                                <img className="pic" src={logo} alt="Rolando Lopantzi logo"/>
                            </Link>

                            <div className="nav-links">
                                <Link to="/projects">Projects</Link>
                                <Link to="/about" className="nav-link">About</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </div>

                            <div id="hamburger-menu">
                                <span className="open-icon"></span>
                            </div>

                        </div>
                    </header>
                </div>
            </Router>
        )
    }
}

export default Banner;