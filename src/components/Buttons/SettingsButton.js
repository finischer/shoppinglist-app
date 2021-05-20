import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import {ReactComponent as SettingsButtonActive} from '../../icons/Button-Settings-Active.svg'
import {ReactComponent as SettingsButtonNoActive} from '../../icons/Button-Settings-NotActive.svg'

export default class SettingsButton extends Component {
    
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <Link to="/settings"> <SettingsButtonActive /> </Link> </li>   
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <Link to="/settings"><SettingsButtonNoActive /> </Link> </li>   
            )  
        }
        
    }
}
