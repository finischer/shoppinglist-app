import React, { Component } from 'react'
import ShoppinglistItem from './ShoppinglistItem'

export default class Shoppinglist extends Component {
    render() {
        return (
            <div className="shoppinglist-home">
                <div className="container">
                    {this.props.shoppinglist.items.map( item =>  <li key={item._id}>  <ShoppinglistItem key={item._id} shoppinglistID={this.props.shoppinglist._id} product={item.name} hinzugefuegt={item.hinzugefuegt} /> </li> ) }
                </div>
            </div>
        )
    }
}
