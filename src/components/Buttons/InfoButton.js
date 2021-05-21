import React, { Component } from 'react'
import {ReactComponent as ButtonInfo} from '../../icons/Button-Info.svg'

export default class InfoButton extends Component {
    
    render() {

        
            return( 
                <div className="button-info">
                    <ButtonInfo onClick={this.props.handleClick}  />
                </div>               
            )
        }   
}
