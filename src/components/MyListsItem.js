import React, { Component } from 'react'

import {ReactComponent as Arrow} from '../icons/Arrow.svg'
export default class MyListsItem extends Component {
    render() {
        return (
            <div className="mylists-item">
                <li> 
                    <div className="user-icon">
                    </div>

                    <div className="item-mylists">
                        <p>{this.props.name} <span> {this.props.amount} <Arrow /> </span></p>
                        <hr />
                    </div>
                    
                </li>
                
            </div>
        )
    }
}
