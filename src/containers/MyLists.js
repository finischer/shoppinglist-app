import React, { Component } from 'react'
import AddButton from '../components/Buttons/AddButton'
import Headline from '../components/Headline'
import Lists from '../components/Shoppinglist/Lists'
import Subheadline from '../components/Subheadline'
import AddShoppinglist from '../components/Forms/AddShoppinglist';

import {getShoppinglistsFromUser} from '../api';


export default class MyLists extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            shoppinglists: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        const response = await getShoppinglistsFromUser(this.props.user)
        const shoppinglists = response.data
        

        this.setState({
            shoppinglists
        })
    }

    handleClick(){
        var modal = document.getElementsByClassName("modal")

        for(var i =0; i<modal.length; i++){
            modal[i].style.display = 'block';
        }            
    }
    
    render() {
        return (
            <div>
                <AddShoppinglist user={this.props.user} />
                <Headline title="Einkaufslisten" />
                
                <div className="subheadline-mylists">
                    <Subheadline title="Meine Listen" />
                    <AddButton handleClick={this.handleClick} />
                </div>

                <Lists shoppinglists={this.state.shoppinglists} />
                
            </div>
        )
    }
}
