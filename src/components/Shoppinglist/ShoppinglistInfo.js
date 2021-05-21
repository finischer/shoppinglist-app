import React, { Component } from 'react'
import CloseButton from '../Buttons/CloseButton'
import StandardButton from '../Buttons/StandardButton'
import Headline from '../Headline'

export default class ShoppinglistInfo extends Component {
    render() {
        return (
            <div className="modal">
                <div className="container modal-content">
                    
                    <div className="headline-button">
                        <CloseButton handleClick={this.handleClickClose} />
                        <Headline title="Einkaufsliste hinzufügen" />
                    </div>

                    <form>
                        <label for="shoppinglist-name"> Name</label><br/>
                        <input type="text" id="shoppinglist-name" name="shoppinglist-name" />
                        <br/>
                        <br/>
                        <label for="shoppinglist-id"> Einkaufsliste nach ID hinzufügen</label><br/>
                        <input type="text" id="shoppinglist-id" name="shoppinglist-id" />

                    </form>

                    <StandardButton name="Hinzufügen" />
                </div>
            </div> 
            
        )
    }
}
