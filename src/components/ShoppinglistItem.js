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
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.proofProductHasValue = this.proofProductHasValue.bind(this);

        this.wrapperRef = React.createRef();
    }


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    // Helpers

    proofProductHasValue(){
        if(this.state.product === ""){
            this.setState({
                product: "Produkt hinzufügen"
            })
        }
    }
    



    //Handle-Functions
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

    
    handleClickOutside(e){
        

        if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
            this.proofProductHasValue();
            this.setState({
                inputField: false
            })
        }
    }

    //Press-Functions

    _pressEnter(e){
        if(e.keyCode === 13 ){
            this.proofProductHasValue();
            this.setState({
                inputField: false
            })
        }
    }
        
    render() {
        
        let isProduct = this.state.product === "Produkt hinzufügen" ? true : false;
    
        let listItem = this.state.inputField ?  <input id="input-shoppinglist" type="text" autoFocus  placeholder="Produkt hinzufügen" value={`${isProduct ? "" : this.state.product}`} onChange={this.handleChange} contentEditable="true" onKeyDown={this._pressEnter}  /> : <p className={`${isProduct ? "no-product" : ""}`} onClick={this.handleItemClick} > {this.state.product} <span> Hinzugefügt am {this.state.date} </span></p>;
        let toDoBox = this.state.active ? <ToDoBoxDone onClick={this.handleClick} /> : <ToDoBoxBlanco onClick={this.handleClick} /> ;
            
        
        return (
                <div className={`shoppinglist-item ${this.state.active ? "check" : ""}`}> 
                <li> 
                    <div className={"todo-box"}>
                        {toDoBox}
                    </div> 
                    
                    <div className="listitem-shoppinglist" ref={this.wrapperRef}>
                        {listItem}
                        <hr />
                    </div>
                </li>
                    
            </div>
            )
        
    }
}
