import React from 'react';
import { umich, purdue, uiuc } from './imports';
import './brand.css';

const Brand = () => (
  <div className="collide__brand section__padding">
    <div>
      <img alt="" className="collide__umich" src={umich} />
    </div>
    <div>
      <img alt="" className="collide__uiuc" src={uiuc} />
    </div>
    <div>
      <img alt="" className="collide__purdue" src={purdue} />
    </div>

  </div>
);

export default Brand;
