import React, { Component } from 'react';
import './MediaQueries.scss';
import './App.scss';
// import SideMenu from './SideMenu';

class MobileBanner extends Component {
    render() {
        const logo = require('./img/RL_favicon-2018.png');
        return(
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
        )
    }
}

export default MobileBanner;