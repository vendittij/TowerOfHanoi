import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackDrop from './comps/TowerOfHanoi.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tower of Hanoi
        <div>
          <h4>Rules</h4>
          <h6>
            1. You must move all rings from the right peg to the left peg in as few moves as possible </h6>
          <h6>
            2. You may only move one ring at a time from the top of any peg</h6>
          <h6>
            3. Perfect score is 15 </h6>
        </div>
        <BackDrop/>
      </header>
    </div>
  );
}

export default App;
