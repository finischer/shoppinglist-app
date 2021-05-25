import React, { Component } from 'react'
import {ReactComponent as FamilyButtonNoActive} from '../../icons/Button-Family-NotActive.svg'

export default class FamilyButton extends Component {
    render() {
            return (
                <li> <a href="/myfamily"> <FamilyButtonNoActive /> </a>  </li>   
            )   
    }
}
