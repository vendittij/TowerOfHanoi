import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tower from './comps/TowerOfHanoi.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tower/>
      </header>
    </div>
  );
}

export default App;
