import React, { Component } from 'react'
import {ReactComponent as ToDoBoxBlanco} from '../../icons/ToDo-Box.svg'
import {ReactComponent as ToDoBoxDone} from '../../icons/ToDo-Box-Done.svg'

export default class ToDoBox extends Component {
    
    constructor(props){
        super(props);
        this.state = {
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
                <div className="todo-box">
                    <ToDoBoxBlanco onClick={this.handleClick} />
                </div>
            )
        }else{
            return (
                <div className="todo-box">
                    <ToDoBoxDone onClick={this.handleClick} />
                </div>
            )
        }
       
    }
}
