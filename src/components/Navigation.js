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
            home: true,
            list: false,
            family: false,
            settings: false,
            user: false            
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name){
       if (name === "home") {
           this.setState({
                home: true,
                list: false,
                family: false,
                settings: false,
                user: false
            });
       }else if (name === "list") {
            this.setState({
                home: false,
                list: true,
                family: false,
                settings: false,
                user: false
            });
       }else if (name === "family") {
            this.setState({
                home: false,
                list: false,
                family: true,
                settings: false,
                user: false
            });
       }else if (name === "settings") {
            this.setState({
                home: false,
                list: false,
                family: false,
                settings: true,
                user: false
            });
       }else if (name === "user") {
            this.setState({
                home: false,
                list: false,
                family: false,
                settings: false,
                user: true
            });
       }

    }
    
    
    
    render() {
        return (
            <div className="navigation">
                <div className="navigation-block">
                    <ul>
                        <HomeButton pressed={this.state.home} handleClick={() => this.handleClick("home")} />
                        <ListButton pressed={this.state.list} handleClick={() => this.handleClick("list")} />
                        <FamilyButton pressed={this.state.family} handleClick={() => this.handleClick("family")} />
                        <SettingsButton pressed={this.state.settings} handleClick={() => this.handleClick("settings")} />
                        <UserButton pressed={this.state.user} handleClick={() => this.handleClick("user")} />
                    </ul>
                </div>
            </div>
        )
    }
}
