import React, {Component} from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(data => {})
  }

  render() {
    return(
      <div>
      </div>)
  }

} 