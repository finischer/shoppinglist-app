import React, { Component } from 'react'

export default class Headline extends Component {
    render() {
        return (
            <div className="headline-trennlinie">
                <h1> {this.props.title} </h1>
                <hr />
            </div>
        )
    }
}
