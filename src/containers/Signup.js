import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import {signup} from '../api';



export default class Signup extends Component {
    constructor(props){
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }

    

    handleSignup(){

        const vorname = document.getElementById('vorname').value
        const email = document.getElementById('email').value
        const passwort = document.getElementById('passwort').value
        
        signup(vorname, email, passwort);

        
    }

    
    render() {
        
        
        return (
            <div className="container form-container">
            <form id="signup-form">
                <label htmlFor="vorname"><b>Vorname*</b></label>
                <input id="vorname" type="text" placeholder="Vornamen eingeben" name="vorname"  required />

                <label htmlFor="email"><b>E-Mail*</b></label>
                <input id="email" type="text" placeholder="E-Mail eingeben" name="email"  required />

                <label htmlFor="password"><b>Password*</b></label>
                <input id="passwort" type="password" placeholder="Passwort eingeben" name="passwort" required />

                <label htmlFor="password"><b>Password wiederholen*</b></label>
                <input id="password-repeat" type="password" placeholder="Passwort wiederholen" name="passwort-repeat" required />     

                
                <p id="login-link">Bereits ein Account? <br /> <Link to="/login">Einloggen</Link></p>
                
            </form>

            <button className="btn btn-signup" onClick={this.handleSignup}>Registrieren</button>

            
        </div>
        )
    }
}
