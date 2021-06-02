import React, { Component } from 'react'
import AddButton from '../components/Buttons/AddButton'
import InfoButton from '../components/Buttons/InfoButton'
import Headline from '../components/Headline'
import Shoppinglist from '../components/Shoppinglist/Shoppinglist'
import ShoppinglistInfo from '../components/Shoppinglist/ShoppinglistInfo'
import Subheadline from '../components/Subheadline'


import {getShoppinglistsFromUser} from '../api';
import {updateShoppinglist} from '../api';


export default class ShoppinglistPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id: '',
            title: '',
            items: [],
            users: [],
            erstellt: '',
            letzte_aenderung: '',
            letzte_aenderung_von: ''
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
        const rand = Math.floor(Math.random() * 1000000000000000000000000);

        var newProduct = {
            _id: rand.toString(),
            product_name: "Produkt hinzufügen",
            hinzugefuegt: "21.05.2021",
            checked: false
        };

        this.setState({
            items: [...this.state.items, newProduct ]
        }, () => {updateShoppinglist(this.state)});

    }

    async componentDidMount(){
        if(window.location.search !== ""){
            var W = window.location.search.split("=")
            const response = await getShoppinglistsFromUser(this.props.user)
            const shoppinglist = response.data.filter( (list) => list._id === W[1])[0]
            
                if (shoppinglist){
                    this.setState({
                        _id: shoppinglist._id,
                        title: shoppinglist.title,
                        items: shoppinglist.items,
                        users: shoppinglist.users,
                        erstellt: shoppinglist.erstellt,
                        letzte_aenderung: shoppinglist.letzte_aenderung,
                        letzte_aenderung_von: shoppinglist.letzte_aenderung_von
                    })
                }
        }
    }
    
    
    render() {
        return (
            <div className="shoppinglistpage">
                <ShoppinglistInfo shoppinglist={this.state} user={this.props.user} />
                <Headline title="Einkaufslisten" />
                

                <div className="subheadline-shoppinglistpage">
                    <Subheadline title={this.state.title} />
                    
                    
                    <div className="buttons-shoppinglistpage"> 
                        <InfoButton handleClick={this.handleClickInfo} />
                        <AddButton  handleClick={this.handleClickAdd}/>
                    </div>
                </div>

                <Shoppinglist shoppinglist={this.state} />
                
            </div>
        )
    }
}
