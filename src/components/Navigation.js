import React, { Component } from 'react'
import HomeButton from './Buttons/HomeButton'
import ListButton from './Buttons/ListButton';
import FamilyButton from './Buttons/FamilyButton';
import SettingsButton from './Buttons/SettingsButton';
import UserButton from './Buttons/UserButton';




export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPressed: {
                home: true,
                list: false,
                family: false,
                settings: false,
                user: false
            }
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name){
        if (name == "home") {
            this.setState({
                isPressed:{
                    home: true,
                    list: false,
                    family: false,
                    settings: false,
                    user: false
                }
            });
        }else if(name == "list"){
            this.setState({
                isPressed:{
                    home: false,
                    list: true,
                    family: false,
                    settings: false,
                    user: false
                }
            });
        }else if(name == "family"){
            this.setState({
                isPressed:{
                    home: false,
                    list: false,
                    family: true,
                    settings: false,
                    user: false
                }
            });
        }else if(name == "settings"){
            this.setState({
                isPressed:{
                    home: false,
                    list: false,
                    family: false,
                    settings: true,
                    user: false
                }
            });
        }else if(name == "user"){
            this.setState({
                isPressed:{
                    home: false,
                    list: false,
                    family: false,
                    settings: false,
                    user: true
                }
            });
        }
    }
    
    
    
    render() {
        return (
            <div className="navigation">
                <div className="navigation-block">
                    <ul>
                        <HomeButton pressed={this.state.isPressed.home} onClick={this.handleClick.bind("home")} />
                        <ListButton pressed={this.state.isPressed.list} onClick={this.handleClick.bind("list")} />
                        <FamilyButton pressed={this.state.isPressed.family} onClick={this.handleClick.bind("family")} />
                        <SettingsButton pressed={this.state.isPressed.settings} onClick={this.handleClick.bind("settings")} />
                        <UserButton pressed={this.state.isPressed.user} onClick={this.handleClick.bind("user")} />
                    </ul>
                </div>
            </div>
        )
    }
}
