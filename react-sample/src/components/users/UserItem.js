// Shortcut to is "rce" to write the import React and 
// export class and export default
import React, { Component } from 'react'

export class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: "id",
            login: "mojombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"
        }
    }

    render() {
        // you can clean up your code by having all the state
        // properties as a variable and have it equal to this.state
        const { avatar_url, login, html_url } = this.state;

        return <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style= {{ width: '60px' }}/>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    }
}

export default UserItem