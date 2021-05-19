import React, { Component } from 'react'
import Headline from '../components/Headline'
import Lists from '../components/Lists'
import Subheadline from '../components/Subheadline'

export default class MyLists extends Component {
    render() {
        return (
            <div>
                <Headline title="Einkaufslisten" />
                <Subheadline title="Meine Listen" />
                <Lists />
                
            </div>
        )
    }
}
