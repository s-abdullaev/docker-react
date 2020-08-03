import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./mashrab.png')} className="App-logo" alt="logo" />
        <p>
          Mashrab - ambosh!
        </p>
        <a
          className="App-link"
          href="https:\/\/mashrab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want To Learn More? Click Here!
        </a>
      </header>
    </div>
  );
}

export default App;
