import React, { Component } from 'react'
import {ReactComponent as ToDoBoxBlanco} from '../icons/ToDo-Box.svg'
import {ReactComponent as ToDoBoxDone} from '../icons/ToDo-Box-Done.svg'

export default class ShoppinglistItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: this.props.product,
            date: this.props.date,
            active: false,
            inputField: false 
        };


        this.handleClick = this.handleClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._pressEnter = this._pressEnter.bind(this);
    }

    handleClick(){
        this.setState({
            active: !this.state.active
        });
    }


    handleItemClick(){
        this.setState({
            inputField: true
        });
    }

    handleChange(e){
        this.setState({
            product: e.target.value
        })
    }

    _pressEnter(e){
        if(e.keyCode === 13){
            this.setState({
                inputField: false
            })
        }
    }
        
    render() {

        let listItem = this.state.inputField ?  <input type="text" placeholder="Produkt hinzufügen" value={this.state.product} onChange={this.handleChange} contentEditable="true" onKeyDown={this._pressEnter} /> : <p onClick={this.handleItemClick}>{this.state.product} <span> Hinzugefügt am {this.state.date} </span></p>;
        
        if(this.state.active){
            return (
                <div className={"shoppinglist-item"}>
                <li> 
                    <div className="todo-box">
                        <ToDoBoxBlanco onClick={this.handleClick} />
                    </div> 
                    
                    <div className="listitem-shoppinglist">
                        {listItem}
                        <hr />
                    </div>
                </li>
                    
            </div>
            )
        }else{
            return (
                <div className={"shoppinglist-item check"}>
                <li> 
                    <div className="todo-box">
                        <ToDoBoxDone onClick={this.handleClick} />
                    </div> 
                    
                    <div className="listitem-shoppinglist">
                        {listItem} 
                        <hr />
                    </div>
                   


                </li>
                
                
            </div>
            )
        }
    }
}
