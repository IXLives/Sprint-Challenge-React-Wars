import React, { Component } from "react";
import "./App.css";

import SWCharList from "./components/SWCharList";
import Buttons from "./components/Buttons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(data);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className = 'content'>
          <Buttons function="Previous" getCharacters={this.getCharacters} currentCharacters={this.state.starwarsChars}/>
          <SWCharList characters={this.state.starwarsChars} />
          <Buttons function="Next" getCharacters={this.getCharacters} currentCharacters={this.state.starwarsChars}/>
        </div>
      </div>
    );
  }
}

export default App;
