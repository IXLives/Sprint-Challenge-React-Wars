import React, { Component } from "react";
import "./App.css";

import DogList from './components/dogList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogBreeds: []
    };
  }

  componentDidMount() {
    this.getBreeds("https://dog.ceo/api/breeds/list/all");
  }

  getBreeds = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogBreeds: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Dog Breeds</h1>
        <DogList breeds={this.state.dogBreeds} />
      </div>
    );
  }
}

export default App;
