import React, { Component } from 'react'

export default class StandardButton extends Component {
    
    render() {
        return (
            <button className="btn" onClick={this.props.handleClick}> {this.props.name} </button>
        )
    }
}
