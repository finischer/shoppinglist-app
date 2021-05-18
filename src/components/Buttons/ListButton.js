import React, { Component } from 'react'

import {ReactComponent as ListButtonActive} from '../../icons/Button-List-Active.svg'
import {ReactComponent as ListButtonNoActive} from '../../icons/Button-List-NotActive.svg'

export default class ListButton extends Component {
    
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <ListButtonActive /> </li>   
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <ListButtonNoActive /> </li>   
            )  
        }
        
    }
}
