import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.scss';

import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Rolando',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' }
            ],
            home: {
                title: 'Be persistent',
                subtitle: 'Practice using React',
            },
            about: {
                title: 'About Me'
            },
            contact: {
                title: 'Contact'
            }
        }
    }

    render() {
        return (
            <div className="App">
                <Router>

                    <header>
                        <div className="wrapper main-header">
                            <div className="logo">
                                <h1>ROLANDO</h1>
                            </div>
                            <nav>
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </nav>
                        </div>
                    </header>

                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} /> } />
                    <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} /> } />
                    <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} /> } />

                    <Footer />

                </Router>
            </div>
        )
    }
}

export default App;