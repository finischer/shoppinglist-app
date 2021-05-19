import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as ListButtonActive} from '../../icons/Button-List-Active.svg'
import {ReactComponent as ListButtonNoActive} from '../../icons/Button-List-NotActive.svg'

export default class ListButton extends Component {
    
    render() {
        if (this.props.pressed) {
            return (
                <li onClick={this.props.handleClick}> <Link to="/mylist"> <ListButtonActive /> </Link> </li>  
            ) 
        }else{
            return (
                <li onClick={this.props.handleClick}> <Link to="/mylist"> <ListButtonNoActive /> </Link>  </li>  
            )  
        }
        
    }
}
