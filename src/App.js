import React from 'react';
import './App.css';

import logo from './images/logo.png';
import email from './images/socialButtons/email.png';
import facebook from './images/socialButtons/facebook.png';
import instagram from './images/socialButtons/instagram.png';
import twitter from './images/socialButtons/twitter.png';

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
        <img className="logo-image" src={logo} alt="Macpeters logo" />
        <h1>MacPeters Drawings</h1>
      </header>

      <div className="content">
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

      <div class="footer">
        <img src={logo} alt="Macpeters logo" />
        <span>Original Artwork copyright Maryanne (Mac) Peters</span>
        <div class="social-buttons">
          <a className="social-button" href="mailto:macpetersart@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="Email" /></a>
          <a className="social-button" href="https://www.facebook.com/macpetersArt/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a>
          <a className="social-button" href="https://www.instagram.com/macpetersart/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
          <a className="social-button" href="https://twitter.com/MacPeters_art" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
