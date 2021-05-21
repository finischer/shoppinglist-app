import React, { Component } from 'react'
import {ReactComponent as ButtonClose} from '../../icons/Button-Close.svg'

export default class CloseButton extends Component {
    render() {
        return (
            <div className="button-close">
                <ButtonClose onClick={this.props.handleClick} />
            </div>
        )       
    }
}
