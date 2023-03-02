import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About My Fitness</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">From a young age, I knew that I was destined for greatness in the world of fitness. I had a fierce determination and a strong sense of discipline that set me apart from others. As I started my fitness journey, I quickly realized that it was more than just lifting weights and breaking a sweat. It was a lifestyle that required dedication, hard work, and a never-give-up attitude. I faced numerous obstacles along the way, including injuries and setbacks, but I refused to let them hold me back. Through consistent training, healthy eating habits, and a positive mindset, I transformed my body and achieved my fitness goals. Today, I am proud to say that I am in the best shape of my life, and I am excited to continue pushing myself to new heights. With my unwavering determination and commitment to excellence, I know that there is no limit to what I can achieve.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">My History</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">Growing up, I always knew I was destined for something great. While other kids were content with playing games or watching TV, I was busy exploring the world of technology and dreaming up new ideas. From a young age, I had a rebellious streak and a strong sense of individuality that set me apart from my peers. As I got older, my passion for programming and development only grew stronger, and I knew that I wanted to make a name for myself in the tech industry. Despite facing numerous challenges and obstacles along the way, I never lost sight of my goals and remained focused on achieving success on my own terms. Today, as a MERN stack developer and recognized as the most intelligent teenager in Bangladesh, I am proud to say that I have achieved that goal and am excited to see what the future holds.



</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;