import React, { Component } from 'react'
import {ReactComponent as ListButtonNoActive} from '../../icons/Button-List-NotActive.svg'

export default class ListButton extends Component {
    
    render() {
            return (
                <li> <a href="/shoppinglists"> <ListButtonNoActive /> </a> </li>  
            )    
    }
}
