import React from 'react';
import './App.css';

import AnimalAlphabets from './components/animalAlphabets.js';
import Cattoons from './components/cattoon.js';
import CopyToons from './components/copytoons.js';
import ThatRatBastard from './components/thatRatBastard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="toon-buttons">
          <li>Animal Alphabets</li>
          <li>Cattoons</li>
          <li>Copy Toons</li>
          <li>Draw 9</li>
          <li>That Rat Bastard</li>
        </ul>
      </header>

      
      <ThatRatBastard/>
    </div>
  );
}

export default App;
