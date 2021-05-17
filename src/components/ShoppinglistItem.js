import React, { Component } from 'react'
import {ReactComponent as ToDoBoxBlanco} from '../icons/ToDo-Box.svg'
import {ReactComponent as ToDoBoxDone} from '../icons/ToDo-Box-Done.svg'

export default class ShoppinglistItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: this.props.product,
            date: this.props.date,
            active: false   
        };

        this.handleClick = this.handleClick.bind(this);   
    }

    handleClick(){
        this.setState({
            active: !this.state.active
        });
    }
        
    render() {
        
        if(this.state.active){
            return (
                <div className={"shoppinglist-item"}>
                <li> 
                    <div className="todo-box">
                        <ToDoBoxBlanco onClick={this.handleClick} />
                    </div> 
                    
                    <p>{this.state.product} <span> Hinzugefügt am {this.state.date} </span></p> </li>
                
                <hr />
            </div>
            )
        }else{
            return (
                <div className={"shoppinglist-item check"}>
                <li> 
                    <div className="todo-box">
                        <ToDoBoxDone onClick={this.handleClick} />
                    </div> 
                    
                    <p>{this.state.product} <span> Hinzugefügt am {this.state.date} </span></p> </li>
                
                <hr />
            </div>
            )
        }
    }
}
