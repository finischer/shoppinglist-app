import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Signup extends Component {
    render() {
        return (
            <div className="container signup">
            <form>
                <label htmlFor="email"><b>E-Mail*</b></label>
                <input type="text" placeholder="E-Mail eingeben" name="email"  required />

                <label htmlFor="password"><b>Password*</b></label>
                <input type="password" placeholder="Passwort eingeben" name="password" required />

                <label htmlFor="password"><b>Password wiederholen*</b></label>
                <input type="password" placeholder="Passwort wiederholen" name="password-repeat" required />     

                <button className="btn btn-signup" type="submit">Registrieren</button>
                <p>Bereits ein Account? <br /> <Link to="/login">Einloggen</Link></p>
                
            </form>
        </div>
        )
    }
}
