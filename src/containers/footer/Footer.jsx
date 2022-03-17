import React from 'react';
// import collideLogo from '../../logo.png';
import './footer.css';

const Footer = () => (
  <div className="collide__footer section__padding">
    <div className="collide__footer-heading">
      <h1 className="gradient__text">Listen to the best builders of the midwest</h1>
    </div>

    <div className="collide__footer-btn">
      <p>RSVP Today</p>
    </div>

    <div className="collide__footer-links">
      <div className="collide__footer-links_logo">
        {/* <img src={collideLogo} alt="collide_logo" /> */}
        <p>V1</p>
        <p>Ann Arbor, MI, <br /> All Rights Reserved</p>
      </div>
      <div className="collide__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="collide__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="collide__footer-links_div">
        <h4>Get in touch</h4>
        <p>248-284-5776</p>
        <p>v1michigan@gmail.com</p>
      </div>
    </div>

    <div className="collide__footer-copyright">
      <p>@2022 Collide. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
