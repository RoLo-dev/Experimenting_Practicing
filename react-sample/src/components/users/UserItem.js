// Shortcut to is "rce" to write the import React and 
// export class and export default
import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
    // you can clean up your code by having all the state
    // properties as a variable and have it equal to this.state
    // const { avatar_url, login, html_url } = props.user;

    return <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style= {{ width: '60px' }}/>
        <h3>{login}</h3>
        <div>
            <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
    </div>
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem