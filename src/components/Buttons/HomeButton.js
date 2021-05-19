import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as HomeButtonActive} from '../../icons/Button-Home-Active.svg'
import {ReactComponent as HomeButtonNoActive} from '../../icons/Button-Home-NotActive.svg'


export default class HomeButton extends Component {
    
    render() {
        if (this.props.pressed) {
            return (
                 <li onClick={this.props.handleClick}> <Link to="/home"><HomeButtonActive  /> </Link>   </li> 
            ) 
        }else{
            return (
                 <li onClick={this.props.handleClick}> <Link to="/home"> <HomeButtonNoActive /> </Link>  </li>  
            )  
        }
        
    }
}
