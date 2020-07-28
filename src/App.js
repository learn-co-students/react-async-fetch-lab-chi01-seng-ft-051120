// create your App component here
import React, { Component } from 'react'


const API = "http://api.open-notify.org/astros.json"
export default class App extends Component {


    render(){
        return (
        <div>
            <p>Hello!</p>
        </div>
        )
    }

    componentDidMount() {
        fetch(API)
        .then(resp => resp.json())
        .then(data => console.log(data) )
    }


}