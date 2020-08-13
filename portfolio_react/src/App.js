import React from 'react';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';

import Banner from './components/Banner.js';
// import SideMenu from './components/SideMenu.js'

function App() {
    return(
        <Router>
            <div>
                <Banner />
                {/* <SideMenu /> */}
            </div>
        </Router>
    )
}

export default App;