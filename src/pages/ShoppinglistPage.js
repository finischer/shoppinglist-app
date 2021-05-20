import React, { Component } from 'react'
import Headline from '../components/Headline'
import Shoppinglist from '../components/Shoppinglist'
import Subheadline from '../components/Subheadline'

import {ReactComponent as ButtonAdd} from '../icons/Button-Add.svg'
import {ReactComponent as ButtonInfo} from '../icons/Button-Info.svg'


export default class ShoppinglistPage extends Component {
    render() {
        return (
            <div className="shoppinglistpage">
                <Headline title="Einkaufslisten" />

                <div className="subheadline-shoppinglistpage">
                    <Subheadline title="Einkaufsliste #1" />
                    
                    
                    <div className="buttons-shoppinglistpage"> 
                        <ButtonInfo />  
                        <ButtonAdd />
                    </div>

                </div>


                <Shoppinglist />
            </div>
        )
    }
}
