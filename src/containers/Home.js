import React, { Component } from 'react'
import Headline from '../components/Headline'
import MeineFamilie from '../components/MyFamily/MeineFamilie'
import Subheadline from '../components/Subheadline'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    product: "Eier",
                    date: "17.05.2021"
                },
                {
                    product: "Milch",
                    date: "17.05.2021"
                },
                {
                    product: "Käse",
                    date: "17.05.2021"
                }
            ]
        }
    }
    
    render() {
        return (
            <div>
                <Headline title={`Hallo, ${this.props.user.vorname}`} />
                <Subheadline title="Aktuelle Einkaufsliste" />
                <Subheadline title="Meine Familie" />
                <MeineFamilie />
            </div>
        )
    }
}
