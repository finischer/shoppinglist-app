import React, { Component } from 'react'

export default class StandardButton extends Component {
    render() {
        return (
            <div>
                <button className="btn"> {this.props.name} </button>
            </div>
        )
    }
}
