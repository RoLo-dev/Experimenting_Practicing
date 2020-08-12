import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Banner from './components/Banner.js';
import SideMenu from './components/SideMenu.js';

function App() {
    return(
        <div>
            <Banner />
            <SideMenu />
        </div>
    )
}

export default App;