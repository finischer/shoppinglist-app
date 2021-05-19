import React, { Component } from 'react'
import {Link} from 'react-router-dom';
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
                        <Link to={`${window.location.pathname}/list/${this.props.name}`} > <p>{this.props.name} <span> {this.props.amount} <Arrow /> </span></p> </Link>
                        <hr />
                    </div>
                    
                </li>
                
            </div>
        )
    }
}
