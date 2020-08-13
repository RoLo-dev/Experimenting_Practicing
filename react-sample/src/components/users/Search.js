import React, { Component } from 'react';

export class Search extends Component {
    state = {
        text: ""
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
    }
    onChange = e => {
        // The bottom code works if you only have one input type inside a form
        // this.setState({ text: e.target.value })

        // The bottom code is ideal since it will target all inputs inside a form
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
