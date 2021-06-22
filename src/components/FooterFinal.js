import React from "react";
import "./footerfinal.css";
import { SocialIcon } from 'react-social-icons';

const FooterFinal = () => {
  return (
    <div className="footer-container">
      {/* Box One that is positioned at the left of the page */}
      <div className="section">
        200 PALENCIA <br /> RESORT WAY <br /> BUCARA, INDO <br /> (855) 741-2777
      </div>
      
{/* Box Two that is positioned at the center of the page */}
      <a href="www.google.com" className="lists">
        <ul className="footer-list">
          <li>ABOUT US</li>
          <li>DIRECTION</li>
          <li>CONTACT</li>
          <li>LOVE LOCALS</li>
        </ul>
        <ul className="footer-list" >
          <li >NEWS AND AWARDS</li>
          <li>CAREERS</li>
          <li>GIFT CARDS</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </a>
  
<div className="email">
  Send us a message!
  <div>
           <SocialIcon  className="mail" url="https://www.email.com/"  />
           </div>
</div>
    </div>
  );
};

export default FooterFinal;
