import React, { Component } from 'react'
import {ReactComponent as HomeButtonNoActive} from '../../icons/Button-Home-NotActive.svg'




export default class HomeButton extends Component {
    
    render() {
            return (
                 <li> <button id="home-btn" onClick={() => document.getElementById("Pfad_1-2").setAttribute("fill", "white")}> <a href="/home"> <HomeButtonNoActive  />  </a> </button>   </li> 
            )  
    }
}
