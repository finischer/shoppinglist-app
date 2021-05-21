import React, { Component } from 'react'
import MeineFamilieUser from './MeineFamilieUser'

export default class MeineFamilie extends Component {
    render() {
        return (
            <div className="meinefamilie-home">
                <div className="container">
                    <MeineFamilieUser vorname="Niklas" nachname="Fischer" date="17.05.2021" />
                    <MeineFamilieUser vorname="Daniela" nachname="Fischer" date="17.05.2021" />
                    <MeineFamilieUser vorname="Gerrik" nachname="Fischer" date="17.05.2021" />
                    
                </div>
            </div>
        )
    }
}
