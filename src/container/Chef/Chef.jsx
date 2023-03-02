import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef1} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What I believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Believe in yourself, and you're halfway there.</p>
        </div>
        <p className="p__opensans"> This simple yet powerful quote by Theodore Roosevelt sums up my belief in the importance of self-confidence and perseverance. I truly believe that if you have faith in your abilities and are willing to work hard, you can overcome any obstacle and achieve your goals. So never give up on yourself, keep pushing forward, and trust that you have the strength to succeed. </p>
      </div>

      <div className="app__chef-sign">
        <p>Ariful Islam</p>
        <p className="p__opensans">Developer</p>
        <img src={images.sign2} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;