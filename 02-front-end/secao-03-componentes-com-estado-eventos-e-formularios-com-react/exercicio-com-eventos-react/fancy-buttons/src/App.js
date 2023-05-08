import './App.css';
import React from 'react';

class App extends React.Component {
  handleClick = () => {
    console.log('Botão clicado')
  }
  
  handleButtonOne = () => {
    console.log('Botão clicado')
  }
  
  handleButtonTwo = () => {
    console.log('Botão clicado')
  }
  
  handleButtonThree = () => {
    console.log('Botão clicado')
  }
  render() {
  return (
    <div className="App">
      <button onclick={ this.handleClick }>Botao</button>
      <button onclick={ this.handleButtonOne }>Botao 1</button>
      <button onclick={ this.handleButtonTwo }>Botao 2</button>
      <button onclick={ this.handleButtonThree }>Botao 3</button>
    </div>
  );
  }
}

export default App;
