import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="collide__header section__padding" id="home">
    <div className="collide__header-content">
      <h1 className="gradient__text">Collide</h1>
      <p>Showcasing the most talented build teams from <br /> <br /> The University of Michigan <br /> Purdue University <br /> University of Illinois at Urbana-Champaign
      </p>

      <div className="collide__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Let's do this</button>
      </div>
    </div>

    <div className="collide__header-image">
      <img alt="#" src={ai} />
    </div>
  </div>
);

export default Header;
