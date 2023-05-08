import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickBtnOne: 0,
      clickBtnTwo: 0,
      clickBtnThree: 0,
    }
  }
  
  handleButtonOne = () => {
    this.setState((prevState) => ({
      clickBtnOne:prevState.clickBtnOne + 1,
    }))
  }
  
  handleButtonTwo = () => {
    this.setState((prevState) => ({
      clickBtnTwo: prevState.clickBtnTwo + 1,
    }))
  }
  
  handleButtonThree = () => {
    this.setState((prevState) => ({
      clickBtnThree:prevState.clickBtnThree + 1,
    }))
  }
  render() {
  const { clickBtnOne, clickBtnTwo, clickBtnThree } = this.state;
  return (
    <div className="App">
      <button onclick={ this.handleButtonOne }>{`Cliques botão 1: ${clickBtnOne}`}</button>
      <button onclick={ this.handleButtonTwo }>{`Cliques botão 1: ${clickBtnTwo}`}</button>
      <button onclick={ this.handleButtonThree }>{`Cliques botão 1: ${clickBtnThree}`}</button>
    </div>
  );
  }
}

export default App;
