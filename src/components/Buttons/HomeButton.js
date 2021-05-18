import React, { Component } from 'react'

import {ReactComponent as HomeButtonActive} from '../../icons/Button-Home-Active.svg'
import {ReactComponent as HomeButtonNoActive} from '../../icons/Button-Home-NotActive.svg'


export default class HomeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPressed: this.props.pressed
        }
    }
    
    render() {
        if (this.state.isPressed) {
            return (
                <li> <HomeButtonActive /> </li>   
            ) 
        }else{
            return (
                <li> <HomeButtonNoActive /> </li>   
            )  
        }
        
    }
}
