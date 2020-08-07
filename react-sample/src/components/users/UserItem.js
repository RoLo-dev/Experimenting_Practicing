// Shortcut to is "rce" to write the import React and 
// export class and export default
import React from 'react'

const UserItem = (props) => {
    // you can clean up your code by having all the state
    // properties as a variable and have it equal to this.state
    const { avatar_url, login, html_url } = props.user;

    return <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style= {{ width: '60px' }}/>
        <h3>{login}</h3>
        <div>
            <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
    </div>
}

export default UserItem