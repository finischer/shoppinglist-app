import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import {ReactComponent as UserButtonActive} from '../../icons/Button-User-Active.svg'
import {ReactComponent as UserButtonNoActive} from '../../icons/Button-User-NotActive.svg'

export default class UserButton extends Component {
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <Link to="myuser"> <UserButtonActive /> </Link> </li>   
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <Link to="myuser"> <UserButtonNoActive /> </Link> </li>   
            )  
        }
        
    }
}
