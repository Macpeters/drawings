import React from 'react';
import './App.css';

import Tabs from './components/tabs/tabs.js';

import AnimalAlphabets from './components/animalAlphabets.js';
import Cattoons from './components/cattoon.js';
import CopyToons from './components/copytoons.js';
import Draw9 from './components/draw9.js';
import ThatRatBastard from './components/thatRatBastard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mac Peters</h1>
        <h2>Drawings</h2>
      </header>

      <div>
        <Tabs>
          <div label={{ text: "Alphabets", tabClass: "alphabets" }}>
            <AnimalAlphabets />
          </div>
          <div label={{ text: "Cattoons", tabClass: "cattoons" }}>
            <Cattoons />
          </div>
          <div label={{ text: "Copy Toons", tabClass: "copytoons" }}>
            <CopyToons />
          </div>
          <div label={{ text: "Draw 9", tabClass: "draw9" }}>
            <Draw9 />
          </div>
          <div label={{ text: "That Rat Bastard", tabClass: "rat-bastard" }}>
            <ThatRatBastard />
          </div>
        </Tabs>
      </div>
      
    </div>
  );
}

export default App;
