import React, { Component } from 'react'
import {ReactComponent as ButtonAdd} from '../../icons/Button-Add.svg'
import AddShoppinglist from '../Forms/AddShoppinglist';


export default class AddButton extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            pressed: false
        }
    }

    
    
    render() {

        if(this.state.pressed){
            return( 
                <div className="button-add">
                    <ButtonAdd onClick={() => this.setState({pressed: true})}  />
                    <AddShoppinglist status={this.state.pressed} />
                </div>
            )
        }
        
        return (
            <div className="button-add">
                <ButtonAdd onClick={() => this.setState({pressed: true})}  />
            </div>
        )

        
    }
}
