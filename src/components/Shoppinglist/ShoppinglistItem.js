import React, { Component } from 'react'
import {ReactComponent as ToDoBoxBlanco} from '../../icons/ToDo-Box.svg'
import {ReactComponent as ToDoBoxDone} from '../../icons/ToDo-Box-Done.svg'

import {addProductToShoppinglist} from '../../api';
import {updateShoppinglist} from '../../api';


export default class ShoppinglistItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id: this.props.shoppinglistID,
            items: {
                _id: this.props.id,
                product_name: this.props.product
            },
            hinzugefuegt: this.props.hinzugefuegt,
            checked: this.props.checked,
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


    async componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    // Helpers

    proofProductHasValue(){
        if(this.state.items.product_name === ""){       
            this.setState({
                items: {
                    product_name: "Produkt hinzufügen"
                }
            });
        }
    }
    
    //Handle-Functions
    handleClick(){     
        this.setState({
            checked: !this.state.checked
        }, () => {updateShoppinglist(this.state)});
    }


    handleItemClick(){
        this.setState({
            inputField: true
        });
    }

    handleChange(e){
        this.setState({
            items: {
                product_name: e.target.value
            }
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
        if(e.keyCode === 13){
            
            this.proofProductHasValue();
            
            this.setState({
                checked: false,
                inputField: false
            });

            const updated_list = {
                _id: this.state.items._id,
                product_name: this.state.items.product_name       
            }

            console.log(updated_list)
                        
            addProductToShoppinglist(this.state._id, updated_list)
        }
    }
           
             
        
    render() {
        
        let datum = new Date()
        var heute = datum.getDate()+ "." + (datum.getMonth()+1)+"." + datum.getFullYear()

        let isProduct = this.state.items.product_name === "Produkt hinzufügen" ? true : false;
        let listItem = this.state.inputField ?  <input id="input-shoppinglist" type="text" autoFocus  placeholder="Produkt hinzufügen" value={`${isProduct ? "" : this.state.items.product_name}`} onChange={this.handleChange} contentEditable="true" onKeyDown={this._pressEnter}  /> : <p className={`${isProduct ? "no-product" : ""}`} onClick={this.handleItemClick} > {this.state.items.product_name} <span> Hinzugefügt am {this.state.hinzugefuegt ? this.state.hinzugefuegt : heute} </span></p>;
        let toDoBox = this.state.checked ? <ToDoBoxDone onClick={this.handleClick} /> : <ToDoBoxBlanco onClick={this.handleClick} /> ;

        return (
            <div className={`shoppinglist-item shoppinglist-item-content ${this.state.checked ? "check" : ""}`}> 
                <div className={"todo-box"}>
                    {toDoBox}
                </div> 
                
                <div className="listitem-shoppinglist" ref={this.wrapperRef}>
                    {listItem}
                    <hr />
                </div>     
            </div>
            )
        
    }
}
