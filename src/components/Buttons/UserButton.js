import React, { Component } from 'react'

import {ReactComponent as UserButtonActive} from '../../icons/Button-User-Active.svg'
import {ReactComponent as UserButtonNoActive} from '../../icons/Button-User-NotActive.svg'

export default class UserButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPressed: this.props.pressed
        }
    }
    
    render() {
        if (this.state.isPressed) {
            return (
                <li> <UserButtonActive /> </li>   
            ) 
        }else{
            return (
                <li> <UserButtonNoActive /> </li>   
            )  
        }
        
    }
}
