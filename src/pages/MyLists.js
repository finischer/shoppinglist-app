import React, { Component } from 'react'
import AddButton from '../components/Buttons/AddButton'
import Headline from '../components/Headline'
import Lists from '../components/Shoppinglist/Lists'
import Subheadline from '../components/Subheadline'
import AddShoppinglist from '../components/Forms/AddShoppinglist';

export default class MyLists extends Component {
    
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
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
                <AddShoppinglist />
                <Headline title="Einkaufslisten" />
                
                <div className="subheadline-mylists">
                    <Subheadline title="Meine Listen" />
                    <AddButton handleClick={this.handleClick} />
                </div>

                
                
                <Lists />
                
            </div>
        )
    }
}
