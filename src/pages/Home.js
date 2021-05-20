import React, { Component } from 'react'
import Headline from '../components/Headline'
import MeineFamilie from '../components/MeineFamilie'
import Shoppinglist from '../components/Shoppinglist'
import Subheadline from '../components/Subheadline'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Headline title="Hallo, Niklas" />
                <Subheadline title="Aktuelle Einkaufsliste" />
                <Shoppinglist />
                <Subheadline title="Meine Familie" />
                <MeineFamilie />
            </div>
        )
    }
}
