import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="collide__possibility section__padding" id="possibility">
    <div className="collide__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="collide__possibility-content">
      <h4>What is our purpose?</h4>
      <h1 className="gradient__text">The possibilities of creating are <br /> beyond your imagination</h1>
      <p>Learn and connect with members of these startups (Further description of meeting / info about it)</p>
      <h4>What is our purpose?</h4>
    </div>
  </div>
);

export default Possibility;
