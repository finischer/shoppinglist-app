import React, { useState } from 'react'
import {login} from '../api';
import PropTypes from 'prop-types';



export default function Login ({setToken, setUser}) {
    const [email, setEmail] = useState('')
    const [passwort, setPasswort] = useState('')
    const sessionToken = sessionStorage.getItem('token')

    const handleSubmit = async e =>{
        e.preventDefault()
        // const email = document.getElementById('email').value
        // const passwort = document.getElementById('password').value
        
        const user = {
            email,
            passwort
        };

        const response = await login(user);
        const token = response.data.token
        
        setUser(response.data)

        setToken(token);
    }

    if(!sessionToken){
        return (
            <div className="container form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"><b>E-Mail*</b></label>
                    <input id="email" type="text" placeholder="E-Mail eingeben" name="email" onChange={ e => setEmail(e.target.value)}  required />

                    <label htmlFor="password"><b>Password*</b></label>
                    <input id="password" type="password" placeholder="Passwort eingeben" name="password" onChange={ e => setPasswort(e.target.value)}  required />
                    
                    <button className="btn btn-signup" type="submit">Login</button>
                    <p id="login-link"> <a href="/signup">Registrieren</a></p> 
                </form>
            </div>
        )
    }

    return (
        <div className="container already-logged-in">
            <h1> Du bist bereits eingeloggt!</h1>
            <p> Ausloggen gibt es noch nicht :D </p>
        </div>
    )
    
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
