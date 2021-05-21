import React, { Component } from 'react'

export default class DeleteButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-delete"> {this.props.name} </button>
            </div>
        )
    }
}
