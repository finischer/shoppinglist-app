import React, { Component } from 'react'
import Headline from '../components/Headline'
import Shoppinglist from '../components/Shoppinglist'
import Subheadline from '../components/Subheadline'

export default class List extends Component {
    render() {
        return (
            <div>
                <Headline title="Einkaufslisten" />
                <Subheadline title="Meine Listen" />
                <Shoppinglist />
            </div>
        )
    }
}
