import React, {Component} from 'react';
import Slider from "react-slick";
import "./simpleslider.css";
import sunset from "../images/sunset.jpg";
import cottage from "../images/cottage.jpg";
import coconut from "../images/coconut.jpg";
import relax from "../images/relax.jpg";
import spa from "../images/spa.jpg";
import wedding from "../images/wedding.jpg";



export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <div className="slider-container"   data-aos="fade-up"
        data-aos-duration="2000">
          
          <Slider {...settings}>
            <div>
               <img className="slider-image"src={sunset} alt="" /> 
               <div className="slider-text-box">
               <h3 className="slide-box">JAN 6th Complete serenity in the heart of Destiny</h3>
<h3>#islaescondida #privatebeach #destinyisland</h3>
               </div>


            </div>
            <div>
               <img className="slider-image"src={cottage} alt="" / >
               <h3>JAN 12th Hide yourself on crystal clear creation</h3>
<h3>#islaescondida #privatehuts #clearwaters</h3>
</div>
            <div>
              <img className="slider-image"src={coconut} alt="" />
              <h3>JAN 16th We carry no processed foods on our premises</h3>
<h3>#escondida #organicescondida #hiddenisland</h3>
            </div>
            <div>
             <img className="slider-image"src={spa} alt="" />
             <h3>FEB 6th Relax indoors or outdoors with world class spas</h3>
<h3>#islaescondida #escondidaspas #escondidamassage</h3>
            </div>
            <div>
              <img className="slider-image"src={wedding} alt="" />
              <h3>FEB 9th Monthly major wedding, all island members are invited</h3>
<h3>#escondidawedding #exclusivewedding #marriedonescondida</h3>
            </div>
            <div>
              <img className="slider-image"src={relax} alt="" />
              <h3>FEB 19th Deep Jungle tour</h3>
<h3>#islaescondida #islajungle #escondidajungle</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }