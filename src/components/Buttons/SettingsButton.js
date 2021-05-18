import React, { Component } from 'react'

import {ReactComponent as SettingsButtonActive} from '../../icons/Button-Settings-Active.svg'
import {ReactComponent as SettingsButtonNoActive} from '../../icons/Button-Settings-NotActive.svg'

export default class SettingsButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPressed: this.props.pressed
        }
    }
    
    render() {
        if (this.state.isPressed) {
            return (
                <li> <SettingsButtonActive /> </li>   
            ) 
        }else{
            return (
                <li> <SettingsButtonNoActive /> </li>   
            )  
        }
        
    }
}
