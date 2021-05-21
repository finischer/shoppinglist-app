import React, { Component } from 'react'
import {ReactComponent as ButtonAdd} from '../../icons/Button-Add.svg'


export default class AddButton extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            pressed: false
        }
    }

    handleClick(){
        var modal = document.getElementsByClassName("modal")

        for(var i =0; i<modal.length; i++){
            modal[i].style.display = 'block';
        }
            
        console.log("KLICK AUF ADD BUTTON")
    }
    
    
    render() {

        
            return( 
                <div>
                    <div className="button-add">
                        <ButtonAdd onClick={this.handleClick}  />
                    </div>
                    
                </div>
            )
        }    
    
}
