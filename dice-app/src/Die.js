import React, { Component } from 'react'

class Die extends Component {
    render() {
        return <i className={'fas fa-dice-${this.props.face}'}></i>
    }
}

export default Die;