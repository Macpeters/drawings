import React from 'react';


import animaniacs from '../images/copyToons/macpeters_animaniacs.png';
import bimbosInitiation from '../images/copyToons/macpeters_bimbosInitiation.png';
import renAndStimpy from '../images/copyToons/macpeters_renAndStimpy.png';
import rugrats from '../images/copyToons/macpeters_rugrats.png';
import simpsons from '../images/copyToons/macpeters_simpsons.png';
import tinyToons from '../images/copyToons/macpeters_tinyToons.png';

export default class CopyToons extends React.Component {
  render() {
    return (
      <article>
        <h3>Copy Toons</h3>
        <article>
          <p>
            The purpose of this exercise is to study existing cartoons.  I choose two different characters
            to draw, two poses each.  I then try to come up with a new character that looks like it would
            fit into that world.
          </p>
        </article>

        <article>
          <h4>Animaniacs</h4>
          <img className="copytoon-image" src={animaniacs} alt="drawings of Animaniacs characters" />
          <h4>Bimbo's Initiation</h4>
          <img className="copytoon-image" src={bimbosInitiation} alt="drawings Bimbo's Initiation characters" />
          <h4>Ren and Stimpy</h4>
          <img className="copytoon-image" src={renAndStimpy} alt="drawings of Ren and Stimpy characters" />
          <h4>Rugrats</h4>
          <img className="copytoon-image" src={rugrats} alt="drawings of Rugrats characters" />
          <h4>Simpsons</h4>
          <img className="copytoon-image" src={simpsons} alt="drawings of Simpsons characters" />
          <h4>Tiny Toons</h4>
          <img className="copytoon-image" src={tinyToons} alt="drawings of Tiny Toons characters" />
        </article>
      </article>
    )
  }
}