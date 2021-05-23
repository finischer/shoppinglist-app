import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Auth extends Component {
    render() {
        return (
            <div className="container form-container">
                <form>

                    <label htmlFor="email"><b>E-Mail*</b></label>
                    <input type="text" placeholder="E-Mail eingeben" name="email"  required />

                    <label htmlFor="password"><b>Password*</b></label>
                    <input type="password" placeholder="Passwort eingeben" name="password" required />


                    <button className="btn btn-signup" type="submit">Login</button>
                    <p id="login-link"> <Link to="/signup">Registrieren</Link></p>
                    
                </form>
            </div>
        )
    }
}
