import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';



export default class Signup extends Component {
    constructor(props){
        super(props);
        this.signUp = this.signUp.bind(this);
    }


    signUp(){

        const vorname = document.getElementById('vorname').value
        const email = document.getElementById('email').value
        const passwort = document.getElementById('passwort').value
        
        const new_user = {
            vorname,
            email,
            passwort
        };
        
        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/signup',
            data: new_user
        })
        .then( response => {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });

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

                <button className="btn btn-signup" type="submit" onClick={this.signUp}>Registrieren</button>
                <p id="login-link">Bereits ein Account? <br /> <Link to="/login">Einloggen</Link></p>
                
            </form>

            
        </div>
        )
    }
}
