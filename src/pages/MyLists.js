import React, { Component } from 'react'
import Headline from '../components/Headline'
import Lists from '../components/Lists'
import Subheadline from '../components/Subheadline'
import {ReactComponent as ButtonAdd} from '../icons/Button-Add.svg'

export default class MyLists extends Component {
    render() {
        return (
            <div>
                <Headline title="Einkaufslisten" />
                
                <div className="subheadline-mylists">
                    <Subheadline title="Meine Listen" />
                    <ButtonAdd />
                </div>
                
                <Lists />
                
            </div>
        )
    }
}
