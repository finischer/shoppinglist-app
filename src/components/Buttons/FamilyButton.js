import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import {ReactComponent as FamilyButtonActive} from '../../icons/Button-Family-Active.svg'
import {ReactComponent as FamilyButtonNoActive} from '../../icons/Button-Family-NotActive.svg'

export default class FamilyButton extends Component {
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <Link to="/myfamily"> <FamilyButtonActive /> </Link> </li>   
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <Link to="/myfamily"> <FamilyButtonNoActive /> </Link> </li>   
            )  
        }
        
    }
}
