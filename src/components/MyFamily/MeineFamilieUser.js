import React, { Component } from 'react'
import {ReactComponent as UserIcon} from '../../icons/Button-User-Active.svg'


export default class MeineFamilieUser extends Component {
    render() {
        return (
            <div className="meinefamilie-item">
                <li> 
                    <div className="user-icon">
                        <UserIcon /> 
                    </div>

                    <div className="listitem-familie">
                        <p>{this.props.vorname} {this.props.nachname} <span> Seit {this.props.date} </span> </p>
                        <hr />
                    </div>
                    
                </li>
                
            </div>
        )
    }
}
