import React, { Component } from 'react'

import {ReactComponent as Arrow} from '../icons/Arrow.svg'
import {ReactComponent as ShoppingCart} from '../icons/Shopping-Cart.svg'

export default class MyListsItem extends Component {
    render() {
        return (
            <div className="mylists-item">
                <li> 
                    <div className="shoppinglist-icon">
                        <ShoppingCart />
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
