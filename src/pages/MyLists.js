import React, { Component } from 'react'
import AddButton from '../components/Buttons/AddButton'
import Headline from '../components/Headline'
import Lists from '../components/Lists'
import Subheadline from '../components/Subheadline'

export default class MyLists extends Component {
    render() {
        return (
            <div>
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
