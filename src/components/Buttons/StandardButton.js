import React, { Component } from 'react'

export default class StandardButton extends Component {
    
    render() {
        return (
            <button className="btn" onClick={this.props.handleClick} type={this.props.type}> {this.props.name} </button>
        )
    }
}
