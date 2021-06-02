import React, { Component } from 'react'

export default class DeleteButton extends Component {
    
    
    
    render() {
        return (

                <button className="btn btn-delete" disabled> {this.props.name} </button>
        )
    }
}
