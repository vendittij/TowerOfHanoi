import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackDrop from './comps/TowerOfHanoi.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tower of Hanoi
        <BackDrop/>
      </header>
    </div>
  );
}

export default App;
