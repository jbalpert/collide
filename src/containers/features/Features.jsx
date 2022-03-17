import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Blankly Finance',
    text: 'Build in minutes. Deploy in seconds. Quant workflow reimagined. Algotrading without the Headache 🚀',
  },
  {
    title: 'Helios Threads',
    text: 'Custom garments done right',
  },
];

const Features = () => (
  <div className="collide__features section__padding" id="features">
    <div className="collide__features-heading">
      <h1 className="gradient__text">Join us at the Collide Expo</h1>
      <p>On 4/8/22, we are hosting a virtual event where we display and demo some of our most talented startups from each school.</p>
    </div>
    <div className="collide__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
