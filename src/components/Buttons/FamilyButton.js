import React, { Component } from 'react'

import {ReactComponent as FamilyButtonActive} from '../../icons/Button-Family-Active.svg'
import {ReactComponent as FamilyButtonNoActive} from '../../icons/Button-Family-NotActive.svg'

export default class FamilyButton extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <FamilyButtonActive /> </li>   
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <FamilyButtonNoActive /> </li>   
            )  
        }
        
    }
}
