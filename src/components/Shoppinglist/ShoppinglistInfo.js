import React, { Component } from 'react'
import DeleteButton from '../Buttons/DeleteButton'
import StandardButton from '../Buttons/StandardButton'
import Headline from '../Headline'

export default class ShoppinglistInfo extends Component {
    
    constructor(props){
        super(props);
        
        this.handleClickClose = this.handleClickClose.bind(this);
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
                                <td>17.05.2021</td>
                            </tr>

                            <tr>
                                <td>Anzahl Produkte:</td>
                                <td>{this.props.shoppinglist.items.length}</td>
                            </tr>

                            <tr>
                                <td>Mitglieder:</td>
                                <td>Niklas Fischer </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Daniela Fischer </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Gerrik Fischer </td>
                            </tr>

                            <tr>
                                <td>Aktualisiert:</td>
                                <td>17.05.2021</td>
                            </tr>

                            <tr>
                                <td>Letzte Änderung von:</td>
                                <td>Niklas Fischer</td>
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
