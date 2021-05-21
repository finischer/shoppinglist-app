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
                        <Headline title="Einkaufsliste #1" />
                    </div>

                    <table className="table-shoppinglist-info">
                        <tbody>
                            <tr>
                                <td>Einkaufslisten-ID:</td>
                                <td>123456789</td>
                            </tr>

                            <tr>
                                <td>Erstellt am:</td>
                                <td>17.05.2021</td>
                            </tr>

                            <tr>
                                <td>Anzahl Produkte:</td>
                                <td>{this.props.amount}</td>
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
                                <td>Letzte Änderung am:</td>
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
                            <DeleteButton name="Liste löschen" />

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
