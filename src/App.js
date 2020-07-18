import React, { Component } from "react";

class App extends Component {
  state = {};

  componentDidMount() {
    const url = "http://api.open-notify.org/astros.json";

    fetch(url)
      .then((resp) => resp.json())
      .then((peopleData) => {});
  }
  render() {
    return <div></div>;
  }
}

export default App;
