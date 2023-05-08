import './App.css';
import React from 'react';

function handleClick() {
  console.log('Botão clicado')
}

function handleButtonOne() {
  console.log('Botão clicado')
}

function handleButtonTwo() {
  console.log('Botão clicado')
}

function handleButtonThree() {
  console.log('Botão clicado')
}

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <button onclick={ handleClick }>Botao</button>
      <button onclick={ handleButtonOne }>Botao</button>
      <button onclick={ handleButtonTwo }>Botao</button>
      <button onclick={ handleButtonThree }>Botao</button>
    </div>
  );
  }
}

export default App;
