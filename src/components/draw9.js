import React from 'react';


import portraits from '../images/draw9/macpeters_01_portraits.png';
import landscapes from '../images/draw9/macpeters_02_landscapes.png';
import lights01 from '../images/draw9/macpeters_03_lights.png';
import lights02 from '../images/draw9/macpeters_04_lights.png';
import darkSkinnedLadies from '../images/draw9/macpeters_05_darkSkinnedLadies.png';
import babies from '../images/draw9/macpeters_06_babies.png';
import toddlers from '../images/draw9/macpeters_07_toddlers.png';
import goats from '../images/draw9/macpeters_08_goats.png';
import mice from '../images/draw9/macpeters_09_mice.png';

export default class CopyToons extends React.Component {
  render() {
    return (
      <article>
        <h3>Draw 9</h3>
        <article>
          <p>
            This is an exercise in studying any subject where I think I need some improvement.
            Drawing 9 of that subject gives me a chance to study a few different variations, 
            and see some improvement in my skills. 
          </p>
        </article>

        <article>
          <h4>Mice/Rats</h4>
          <img className="copytoon-image" src={mice} alt="drawings of mice and rats" />
        </article>

        <article>
          <h4>Goats</h4>
          <img className="copytoon-image" src={goats} alt="drawings of goats" />
        </article>

        <article>
          <h4>Toddlers</h4>
          <img className="copytoon-image" src={toddlers} alt="drawings of toddlers" />
        </article>

        <article>
          <h4>Babies</h4>
          <img className="copytoon-image" src={babies} alt="drawings of babies" />
        </article>

        <article>
          <h4>Dark Skinned Ladies</h4>
          <img className="copytoon-image" src={darkSkinnedLadies} alt="drawings of famous women of colour" />
        </article>

        <article>
          <h4>Lights 02</h4>
          <img className="copytoon-image" src={lights02} alt="drawings of lights and reflections" />
        </article>

        <article>
          <h4>Lights 01</h4>
          <img className="copytoon-image" src={lights01} alt="drawings of lights and reflections" />
        </article>

        <article>
          <h4>Landscapes</h4>
          <img className="copytoon-image" src={landscapes} alt="drawings of landscapes" />
        </article>

        <article>
          <h4>Portraits</h4>
          <img className="copytoon-image" src={portraits} alt="drawings of portraits" />
        </article>
      </article>
    )
  }
}