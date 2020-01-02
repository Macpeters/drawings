import React from 'react';

import birds from '../images/animalAlphabets/macpeters_birds_alphabet.png';
import extinct from '../images/animalAlphabets/macpeters_extinct_alphabet.png';
import seaLife from '../images/animalAlphabets/macpeters_seaLife_alphabet.png';

export default class AnimalAlphabets extends React.Component {
  render() {
    return (
      <div>
        <h3>AnimalAlphabets</h3>
        <article>
          <p>
            #animalAlphabets is a weekly drawing challenge that artists can 
            take part in by following the prompts and posting their pieces on 
            Twitter (@animalAlphabets) or Instagram (@animalalphab).    
          </p>

          <p>
            I find this challenge a great way to work on my drawing skills.  I
            can try out new tools and styles, since each alphabet is a new series,
            but the series goes on long enough that I can work on consistency and 
            get a good feel for it.
          </p>
        </article>

        <article>
          <h3>Birds</h3>
          <h4>2019/07</h4>
          <img className="alphabet-image" src={birds} alt="drawings of birds" />
          <div className="summary">
            <p>
              I have continued working with the airbrush tool for this alphabet, while getting
              to know the tablet I now have.  I don't think the pressure sensitiviy is working, so 
              I'll try to figure that out for the next alphabet
            </p>
          </div>
        </article>

        <article>
          <h3>Sea Life</h3>
          <h4>2019/01</h4>
          <img className="alphabet-image" src={seaLife} alt="drawings of sea creatures" />
          <div className="summary">
            <p>
              I wanted to try out the airbrush tool and work with light and shading some more.  I started 
              off with the black outlines that I'm accustomed to with cartoons, but quickly found it 
              looked better without.  
            </p>
          </div>
        </article>
        
        <article>
          <h3>Extinct</h3>
          <h4>2018/06</h4>
          <img className="alphabet-image" src={extinct} alt="drawings of extinct animals" />
          <div className="summary">
            <p>For this alphabet, I decided to keep the animals relatively simple, and
              spend some time on a secondary character, Death.  Death is welcoming all
              his new friends to the afterlife - rewarding them, imitating them, playing
              with them.
            </p>
          </div>
        </article>
      </div>
    )
  }
}