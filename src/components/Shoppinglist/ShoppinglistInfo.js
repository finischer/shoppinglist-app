import React, { Component } from 'react'
import DeleteButton from '../Buttons/DeleteButton'
import StandardButton from '../Buttons/StandardButton'
import Headline from '../Headline'

import {getUser} from '../../api';
import {getShoppinglistsFromUser} from '../../api';


export default class ShoppinglistInfo extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            users: []
        }

        this.handleClickClose = this.handleClickClose.bind(this);
    }

    async componentDidMount(){
        var W = window.location.search.split("=")
        const response = await getShoppinglistsFromUser(this.props.user)
        const shoppinglist = response.data.filter( (list) => list._id === W[1])[0]
        const users = shoppinglist.users
        
        for(var i=0; i<users.length; i++){
            const user = await getUser(users[i])
            .then( res => res)
            .catch(err => console.error(err))
            
            this.setState({
                users: [...this.state.users, user.data.vorname]
            })
        }     
    }



    handleClickClose(){
        var modal = document.getElementsByClassName("modal");
        
        for(var i=0; i<modal.length; i++){
            modal[i].style.display = 'none';
        }
    }


    
    render() {
        return (
            <div className="modal">
                <div className="container modal-content">
                    
                    <div className="headline-button">
                        <Headline title={this.props.shoppinglist.title} />
                    </div>

                    <table className="table-shoppinglist-info">
                        <tbody>
                            <tr>
                                <td>Einkaufslisten-ID:</td>
                                <td id="table-data-shoppinglist-id">{this.props.shoppinglist._id}</td>
                            </tr>

                            <tr>
                                <td>Erstellt am:</td>
                                <td>{this.props.shoppinglist.erstellt}</td>
                            </tr>

                            <tr>
                                <td>Anzahl Produkte:</td>
                                <td>{this.props.shoppinglist.items.length}</td>
                            </tr>
                            
                            <tr>
                                <td>Mitglieder:</td> 
                                <td> {this.state.users.map( (user, index) => {
                                    
                                    if(index === this.state.users.length-1) return <span key={user}> {user} </span>;
                                    return <span key={user}> {user}, </span>;
                                })}</td>
                            </tr>
                            
                            <tr>
                                <td>Aktualisiert:</td>
                                <td>{this.props.shoppinglist.letzte_aenderung}</td>
                            </tr>

                            <tr>
                                <td>Letzte Änderung von:</td>
                                <td>{this.props.shoppinglist.letzte_aenderung_von}</td>
                            </tr>
                        </tbody>
                    </table>

                   <div className="buttons-info">
                        <div id="delete-list">
                            <DeleteButton disabled name="Liste löschen" />

                        </div>
                        <div id="close-list">
                            <StandardButton name="Schließen" handleClick={this.handleClickClose} /> 
                        </div>

                   </div>

                </div>
            </div> 
            
        )
    }
}
