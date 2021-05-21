import React, { Component } from 'react'
import ShoppinglistItem from './ShoppinglistItem'

export default class Shoppinglist extends Component {
    render() {
        return (
            <div className="shoppinglist-home">
                <div className="container">
                    <ShoppinglistItem product="Milch" date="17.05.2021" />
                    <ShoppinglistItem product="Eier" date="17.05.2021" />
                    <ShoppinglistItem product="Äpfel" date="17.05.2021" />
                </div>
            </div>
        )
    }
}
