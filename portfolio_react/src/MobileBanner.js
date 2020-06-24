import React, { Component } from 'react';

class MobileBanner extends Component {
    render() {
        const logo = require('./img/RL_favicon-2018.png');
        return(
            <header className="mobile-header">
                <div className="wrapper">
                    <div className="title">
                        <img src={logo} alt=""/>
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
