import React, { Component } from 'react'
import MyListsItem from './MyListsItem'


export default class Lists extends Component {
    render() {
        return (
            <div className="lists-mylists">
                <div className="container">
                    { this.props.shoppinglists.map( (list) => {
                        return <MyListsItem key={list._id} id={list._id} name={list.title} amount={list.items.length} />
                    })}
                </div>
            </div>
        )
    }
}
