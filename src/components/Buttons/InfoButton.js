import React, { Component } from 'react'
import {ReactComponent as ButtonInfo} from '../../icons/Button-Info.svg'

export default class InfoButton extends Component {
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
    }
    
    
    render() {

        
            return( 
                <div>
                    <div className="button-info">
                        <ButtonInfo onClick={this.handleClick}  />
                    </div>
                    
                </div>
            )
        }   
}
