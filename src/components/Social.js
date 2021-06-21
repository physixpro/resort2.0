import React from 'react'
import { SocialIcon } from 'react-social-icons';
import "./social.css"



const Social = () => {
    return (
        <div className="icon-container">
            <div>
            <SocialIcon url="https://twitter.com" />
            </div>
           <div>
           <SocialIcon url="https://facebook.com/Chaostheory299792458/" />
           </div>
           <div>
           <SocialIcon url="https://youtube.com/" />
           </div>
           <div>
           <SocialIcon url="https://instagram.com/" />
           </div>
          
           
        </div>
    )
}

export default Social
