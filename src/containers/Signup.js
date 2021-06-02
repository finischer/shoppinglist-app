import React, { Component } from 'react'
import {signup} from '../api';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async handleSubmit(e){
       

        const vorname = document.getElementById('vorname').value
        const email = document.getElementById('email-signup').value
        const passwort = document.getElementById('password-signup').value

        e.preventDefault()
        
        const user = {
            vorname,
            email,
            passwort
        };
         
        await signup(user);
    }

    
    render() {
        
        return (
            <div className="container form-container">
                <h1> Registrieren </h1>
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="vorname"><b>Vorname*</b></label>
                    <input id="vorname" type="text" placeholder="Vornamen eingeben" name="vorname"  required />

                    <label htmlFor="email"><b>E-Mail*</b></label>
                    <input id="email-signup" type="text" placeholder="E-Mail eingeben" name="email"  required />

                    <label htmlFor="password"><b>Password*</b></label>
                    <input id="password-signup" type="password" placeholder="Passwort eingeben" name="passwort" required />

                    <label htmlFor="password"><b>Password wiederholen*</b></label>
                    <input id="password-repeat-signup" type="password" placeholder="Passwort wiederholen" name="passwort-repeat" required />     

                    <button className="btn btn-signup" type="submit">Registrieren</button>
                    <p id="login-link">Bereits ein Account? <br /> <a href="/login">Einloggen</a></p>
                    
                </form>
        
        

            
        </div>
        )
    }
}
