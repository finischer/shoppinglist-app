import React, { Component } from 'react'


import HomeButton from './Buttons/HomeButton'
import ListButton from './Buttons/ListButton';
import FamilyButton from './Buttons/FamilyButton';
import SettingsButton from './Buttons/SettingsButton';
import UserButton from './Buttons/UserButton';




export default class Navigation extends Component {

    render() {
        return (
            <div className="navigation">
                <div className="navigation-block">
                    <ul>
                        <HomeButton />
                        <ListButton />
                        <FamilyButton />
                        <SettingsButton />
                        <UserButton />
                    </ul>
                </div>
            </div>
        )
    }
}
