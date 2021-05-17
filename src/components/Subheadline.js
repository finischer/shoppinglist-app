import React, { Component } from 'react'

export default class Subheadline extends Component {
    
    
    render() {
        return (
            <div className="subheadline-trennlinie">
                <h3> {this.props.title}</h3>
                <hr />
            </div>
        )
    }
}
