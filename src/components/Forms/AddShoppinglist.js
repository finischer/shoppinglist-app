import React, { Component } from 'react'
import StandardButton from '../Buttons/StandardButton'
import Headline from '../Headline'
import Subheadline from '../Subheadline'



export default class AddShoppinglist extends Component {
    
    
    render() {
        
        return (
            <div className="form-addShoppinglist">
                
                <div className="modal" style={{display: this.props.status ? 'block' : 'none'}}>
                    <div className="container modal-content">
                        <Headline title="Einkaufsliste hinzufügen" />
                        
                        <form>
                            <label for="shoppinglist-name"> Name</label><br/>
                            <input type="text" id="shoppinglist-name" name="shoppinglist-name" />

                        </form>

                        <StandardButton name="Hinzufügen" />
                    </div>
                </div> 
            </div>
        )
    }
}
