import React, { Component } from 'react'

import {ReactComponent as SettingsButtonNoActive} from '../../icons/Button-Settings-NotActive.svg'

export default class SettingsButton extends Component {
    
    render() {
            return (
                <li> <a href="/settings"> <SettingsButtonNoActive /> </a> </li>   
            )    
    }
}
