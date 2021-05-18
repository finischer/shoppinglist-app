import React, { Component } from 'react'

import {ReactComponent as HomeButtonActive} from '../../icons/Button-Home-Active.svg'
import {ReactComponent as HomeButtonNoActive} from '../../icons/Button-Home-NotActive.svg'


export default class HomeButton extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <HomeButtonActive  /> </li>   
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <HomeButtonNoActive /> </li>   
            )  
        }
        
    }
}
