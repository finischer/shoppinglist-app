import React, { Component } from 'react'
import CloseButton from '../Buttons/CloseButton'
import StandardButton from '../Buttons/StandardButton'
import Headline from '../Headline'



export default class AddShoppinglist extends Component {
    constructor(props){
        super(props);
        this.state = {
            closeButtonPressed: false
        }

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
            <div className="form-addShoppinglist">
                
                <div className="modal">
                    <div className="container modal-content">
                        
                        <div className="headline-button">
                            <CloseButton handleClick={this.handleClickClose} />
                            <Headline title="Einkaufsliste hinzufügen" />
                        </div>

                        <form>
                            <label htmlFor="shoppinglist-name"> Name</label><br/>
                            <input type="text" id="shoppinglist-name" name="shoppinglist-name" />
                            <br/>
                            <br/>
                            <label htmlFor="shoppinglist-id"> Einkaufsliste nach ID hinzufügen</label><br/>
                            <input type="text" id="shoppinglist-id" name="shoppinglist-id" />

                        </form>

                        <StandardButton name="Hinzufügen" />
                    </div>
                </div> 
            </div>
        )
    }
}
