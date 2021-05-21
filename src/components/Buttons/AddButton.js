import React, { Component } from 'react'
import {ReactComponent as ButtonAdd} from '../../icons/Button-Add.svg'


export default class AddButton extends Component {
    
    render() {

        
            return( 
                <div className="button-add">
                    <ButtonAdd onClick={this.props.handleClick}  />
                </div>
            )
        }    
    
}
