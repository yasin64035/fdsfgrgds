import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Me</h1>
        <p className="p__opensans">Dhaka , Bangladesh</p>
        <p className="p__opensans">mdariful6403@gmail.com</p>
        
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo1} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        {/* <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} /> */}
        <div className="app__footer-links_icons">
  <a href="https://www.facebook.com/mdariful6403" target="_blank">
    <FiFacebook />
  </a>
  {/* <a href="https://www.twitter.com" target="_blank">
    <FiTwitter />
  </a> */}
  <a href="https://www.instagram.com/ya381sin/" target="_blank">
    <FiInstagram />
  </a>
</div>

      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Active TIme</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Ariful Islam. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;