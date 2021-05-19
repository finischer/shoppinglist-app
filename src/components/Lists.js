import React, { Component } from 'react'
import MyListsItem from './MyListsItem'

export default class Lists extends Component {
    render() {
        return (
            <div className="lists-mylists">
                <div className="container">
                   <MyListsItem name="Einkaufliste #1" amount="3" />
                   <MyListsItem name="Einkaufliste #2" amount="8" />
                   <MyListsItem name="Einkaufliste #3" amount="10" />
                </div>
            </div>
        )
    }
}
