import React, { Component } from 'react'
import AddButton from '../components/Buttons/AddButton'
import InfoButton from '../components/Buttons/InfoButton'
import Headline from '../components/Headline'
import Shoppinglist from '../components/Shoppinglist/Shoppinglist'
import ShoppinglistInfo from '../components/Shoppinglist/ShoppinglistInfo'
import Subheadline from '../components/Subheadline'



export default class ShoppinglistPage extends Component {
    render() {
        return (
            <div className="shoppinglistpage">
                <ShoppinglistInfo />
                <Headline title="Einkaufslisten" />

                <div className="subheadline-shoppinglistpage">
                    <Subheadline title="Einkaufsliste #1" />
                    
                    
                    <div className="buttons-shoppinglistpage"> 
                        <InfoButton />
                        <AddButton />
                    </div>

                </div>


                <Shoppinglist />
            </div>
        )
    }
}
