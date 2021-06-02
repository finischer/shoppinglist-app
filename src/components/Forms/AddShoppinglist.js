import React, { Component } from 'react'
import CloseButton from '../Buttons/CloseButton'
import Headline from '../Headline'


import { addShoppinglistByID, addShoppinglistByName } from '../../api';



export default class AddShoppinglist extends Component {
    constructor(props){
        super(props);
        this.state = {
            closeButtonPressed: false
        }

        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleClickClose(){
        var modal = document.getElementsByClassName("modal");

        for(var i=0; i<modal.length; i++){
            modal[i].style.display = 'none';
        }
    }


    async handleSubmit(e){
        e.preventDefault()
        
        const listName = document.getElementById('shoppinglist-name').value
        const listID = document.getElementById('shoppinglist-id').value
        
        if(listID){
            await addShoppinglistByID(this.props.user._id, listID)
        }else if(listName){
            const new_list = {
                title: listName
            }
            
            await addShoppinglistByName(this.props.user, new_list)  
        }

        window.location.reload();
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

                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="shoppinglist-name"> Name</label><br/>
                            <input type="text" id="shoppinglist-name" name="shoppinglist-name" />
                            <br/>
                            <br/>
                            <label htmlFor="shoppinglist-id"> Einkaufsliste nach ID hinzufügen</label><br/>
                            <input type="text" id="shoppinglist-id" name="shoppinglist-id" />
                            <button className="btn" type="submit"> Hinzufügen </button>
                        </form>


                        
                    </div>
                </div> 
            </div>
        )
    }
}
