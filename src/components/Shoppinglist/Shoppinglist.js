import React, { Component } from 'react'
import ShoppinglistItem from './ShoppinglistItem'

export default class Shoppinglist extends Component {
    render() {
        
        const listProducts = this.props.items.map((item) =>
        <li key={item.id}> <ShoppinglistItem id={item.id} product={item.product} date={item.date} /> </li>
        );
                        
        return (
            <div className="shoppinglist-home">
                <div className="container">
                    {listProducts}
                </div>
            </div>
        )
    }
}
