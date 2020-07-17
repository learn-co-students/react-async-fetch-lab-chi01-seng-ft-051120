// create your App component here
import React, {Component} from 'react'

export default class App extends Component{
    constructor() {
        super();
        this.state = {
            astronauts: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                astronauts: data.people 
            })
        })
    }

    renderAstronauts = () => {
        return this.state.astronauts.map((astronaut, index) => {
            return (<div key={index}><p>Craft: {astronaut.craft}</p>
            <p>Name: {astronaut.name}</p></div>)
        })
    }
    
    render() {
        return(
            <div>
                {this.renderAstronauts()}
            </div>
        )
    }
}