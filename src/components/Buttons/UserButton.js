import React, { Component } from 'react'

import {ReactComponent as UserButtonActive} from '../../icons/Button-User-Active.svg'
import {ReactComponent as UserButtonNoActive} from '../../icons/Button-User-NotActive.svg'

export default class UserButton extends Component {
    constructor(props){
        super(props);
       
    }
    
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <UserButtonActive /> </li>   
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <UserButtonNoActive /> </li>   
            )  
        }
        
    }
}
