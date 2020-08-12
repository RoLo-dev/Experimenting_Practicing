import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Banner from './components/Banner.js';
import MobileNav from './components/MobileNav'

function App() {
    return(
        <Router>
            <div>
                <Banner />
                <MobileNav />
            </div>
        </Router>
    )
}

export default App;