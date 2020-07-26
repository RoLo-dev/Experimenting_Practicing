import React from 'react';
import './App.scss';

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
                subtitle: 'Practicing using React',
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
            </div>
        )
    }
}

export default App;