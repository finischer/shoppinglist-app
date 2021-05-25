import React, { Component } from 'react'

import {ReactComponent as UserButtonNoActive} from '../../icons/Button-User-NotActive.svg'

export default class UserButton extends Component {
    render() {
            return (
                <li> <a href="/login"> <UserButtonNoActive /> </a> </li>   
            )
    }
}
