import React, { Component } from 'react'

import {ReactComponent as FamilyButtonActive} from '../../icons/Button-Family-Active.svg'
import {ReactComponent as FamilyButtonNoActive} from '../../icons/Button-Family-NotActive.svg'

export default class FamilyButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPressed: this.props.pressed
        }
    }
    
    render() {
        if (this.state.isPressed) {
            return (
                <li> <FamilyButtonActive /> </li>   
            ) 
        }else{
            return (
                <li> <FamilyButtonNoActive /> </li>   
            )  
        }
        
    }
}
