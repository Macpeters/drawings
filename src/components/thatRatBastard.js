import React from 'react';

import inktoberBest from '../images/thatRatBastard/_inktober_2019_best.png';
import drunk from '../images/thatRatBastard/01_drunk.png';
import destroyingNature from '../images/thatRatBastard/02_destroyingNature.png';
import rockin from '../images/thatRatBastard/03_rockin.png';
import smoker from '../images/thatRatBastard/04_smoker.png';
import beingHurt from '../images/thatRatBastard/05_beingHurt.png';
import causingHurt from '../images/thatRatBastard/06_causingHurt.png';


export default class ThatRatBastard extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h3>ThatRatBastard</h3>
          <div>
            This is a character I created for Inkober of 2019.  I wanted a simple, black and white character
            to develop so I could work on more dynamic poses and character consistency.  I tried a few iterations
            before landing on this guy - a jerk.  I think I can push his poses and expressions a lot further.
            I also started working on another, kinder character who can balance him out and give him someone
            to interact with.
        </div>
        </article>

        <article>
          <div>
            <h4>My best 16 from Inktober</h4>
            <img className="rat-image" src={inktoberBest} alt="That Rat Bastard - best of Inktober 2019" />
            <p>
              With prompts out of the way, I can focus more on poses and facial expressions,
              keeping props and decorations to a minimum.  I took the top 16 images I drew during October, 
              and used those to work on expanding the moment.  I've also started spending more time on facial
              expressions.
            </p>
            <h4>Drunk and Belligerent</h4>
            <img className="rat-image" src={drunk} alt="That Rat Bastard acting drunk and belligerent" />
            <h4>Destroying Nature</h4>
            <img className="rat-image" src={destroyingNature} alt="That Rat Bastard destroying nature" />
            <h4>Rockin' Out</h4>
            <img className="rat-image" src={rockin} alt="That Rat Bastard as a rocker" />
            <h4>Smokin'</h4>
            <img className="rat-image" src={smoker} alt="That Rat Bastard as a smoker" />
            <h4>Being Hurt</h4>
            <img className="rat-image" src={beingHurt} alt="That Rat Bastard taking some damage" />
            <h4>Causing Damage</h4>
            <img className="rat-image" src={causingHurt} alt="That Rat Bastard causing some pain" />
          </div>
        </article>
      </div>
    )
  }
}