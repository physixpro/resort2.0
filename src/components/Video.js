import React from 'react';
import resort from '../videos/resort.mp4';
import resortOne from "../images/resortOne.jpg";

import './video.css'

const Video = () => {
    return (
        <div className="video-container">
{/* <video loop autoPlay src={resort} type="video/mp4" /> */}
<img src={resortOne} alt="" />
        </div>
        
    )
}

export default Video
