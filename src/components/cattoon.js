import React from 'react';

import costumed from '../images/cattoons/macpeters_series_01_costumed.png';
import cute from '../images/cattoons/macpeters_series_01_cute.png';
import halloween from '../images/cattoons/macpeters_series_01_halloween.png';
import movie from '../images/cattoons/macpeters_series_01_movie.png';
import mythical from '../images/cattoons/macpeters_series_01_mythical.png';

export default class Cattoons extends React.Component {
  render() {
    return (
      <article>
        <h3>Mythical Cattoons</h3>
        <article>
          <p>
            I started drawing these cats for Drawtober, 2018. I've grouped them together in 
            small collections for sticker sheets.  Individual cats are available on TeePublic
            as T-shirts, or other products. 
          </p>
        </article>

        <article>
          <img className="alphabet-image" src={costumed} alt="drawings of cats in costumes" />
          <img className="alphabet-image" src={cute} alt="drawings of cute cats" />
          <img className="alphabet-image" src={halloween} alt="drawings of halloween cats" />
          <img className="alphabet-image" src={movie} alt="drawings of movie characters as cats" />
          <img className="alphabet-image" src={mythical} alt="drawings of mythical cats" />
        </article>
      </article>

      
    )
  }
}