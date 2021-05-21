import React, { Component } from 'react'
import AddButton from '../components/Buttons/AddButton'
import InfoButton from '../components/Buttons/InfoButton'
import Headline from '../components/Headline'
import Shoppinglist from '../components/Shoppinglist/Shoppinglist'
import ShoppinglistInfo from '../components/Shoppinglist/ShoppinglistInfo'
import Subheadline from '../components/Subheadline'



export default class ShoppinglistPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: "1",
                    product: "Eier",
                    date: "17.05.2021"
                },
                {   
                    id:"2",
                    product: "Milch",
                    date: "17.05.2021"
                },
                {
                    id:"3",
                    product: "Käse",
                    date: "17.05.2021"
                }
            ]
        }

        this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    
    handleClickInfo(){
        var modal = document.getElementsByClassName("modal")

        for(var i =0; i<modal.length; i++){
            modal[i].style.display = 'block';
        }            
    }

    handleClickAdd(){
        const rand = Math.floor(Math.random() * 10000);

        var newProduct = {
            id: rand.toString(),
            product: "Produkt hinzufügen",
            date: "21.05.2021"
        };

        this.setState({
            items: [...this.state.items, newProduct ]
        });
    }

    

    
    
    render() {
        return (
            <div className="shoppinglistpage">
                <ShoppinglistInfo amount={this.state.items.length} />
                <Headline title="Einkaufslisten" />

                <div className="subheadline-shoppinglistpage">
                    <Subheadline title="Einkaufsliste #1" />
                    
                    
                    <div className="buttons-shoppinglistpage"> 
                        <InfoButton handleClick={this.handleClickInfo} />
                        <AddButton  handleClick={this.handleClickAdd}/>
                    </div>

                </div>

                
                <Shoppinglist items={this.state.items} />
                
            </div>
        )
    }
}
