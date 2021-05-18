import React, { Component } from 'react'

import {ReactComponent as ListButtonActive} from '../../icons/Button-List-Active.svg'
import {ReactComponent as ListButtonNoActive} from '../../icons/Button-List-NotActive.svg'

export default class ListButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPressed: this.props.pressed
        }
    }
    
    render() {
        if (this.state.isPressed) {
            return (
                <li> <ListButtonActive /> </li>   
            ) 
        }else{
            return (
                <li> <ListButtonNoActive /> </li>   
            )  
        }
        
    }
}
