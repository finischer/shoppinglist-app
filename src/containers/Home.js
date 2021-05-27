import React, { Component } from 'react'
import Headline from '../components/Headline'
import MeineFamilie from '../components/MyFamily/MeineFamilie'
import Subheadline from '../components/Subheadline'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    
    render() {
        return (
            <div>
                <Headline title={`Hallo, ${this.props.user.vorname}`} />
                <Subheadline title="Aktuelle Einkaufsliste" />
                <p> Wird bald hier zu sehen sein</p>
                <Subheadline title="Meine Familie" />
                <p> Wird bald hier zu sehen sein</p>
            </div>
        )
    }
}
