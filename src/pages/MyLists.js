import React, { Component } from 'react'
import AddButton from '../components/Buttons/AddButton'
import Headline from '../components/Headline'
import Lists from '../components/Lists'
import Subheadline from '../components/Subheadline'
import AddShoppinglist from '../components/Forms/AddShoppinglist';

export default class MyLists extends Component {
    render() {
        return (
            <div>
                <AddShoppinglist />
                <Headline title="Einkaufslisten" />
                
                <div className="subheadline-mylists">
                    <Subheadline title="Meine Listen" />
                    <AddButton />
                </div>

                
                
                <Lists />
                
            </div>
        )
    }
}
