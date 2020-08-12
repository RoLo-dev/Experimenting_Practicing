import React, { Component } from 'react';
import '../MediaQueries.scss';
import '../App.scss';

class Banner extends Component {
    render() {
        const logo = require('../img/RL_favicon-2018.png');
        return(
            <div className="banner">
                <header className="mobile-header">
                    <div className="wrapper mobile-header-container">
                        <div className="title">
                            <img className="pic" src={logo} alt="Rolando Lopantzi logo"/>
                        </div>
                        <div id="hamburger-menu">
                            <span className="open-icon"></span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Banner;