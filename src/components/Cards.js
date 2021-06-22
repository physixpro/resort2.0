import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import imageOneBlurred from "../images/imageOneBlurred.jpg";
import imageTwoBlurred from "../images/imageTwoBlurred.jpg";
import imageThreeBlurred from "../images/imageThreeBlurred.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./cards.css";

const SimpleCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [showCardOne, setShowCardOne] = useState(true);
  const [showCardTwo, setShowCardTwo] = useState(true);
  const [showCardThree, setShowCardThree] = useState(true);

  const useStyles = makeStyles({
    root: {
      backgroundColor: "none",
      height: 400,
      width: 525,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  console.log();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="card-container">
      {/***************** First Card ******************/}
      {showCardOne ? (
        <Card
          onMouseOver={() => setShowCardOne(false)}
          className={classes.root}
          variant="outlined"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            id="first-image-clear"
            src="https://sharp-wescoff-20e282.netlify.app/static/media/aOne.0b6d81c7.jpg"
            alt=""
            width="525"
            height="400"
          />
        </Card>
      ) : (
        <img
          className="blurredImages"
          id="firstImage"
          onMouseOut={() => setShowCardOne(true)}
          // className="blurredImageOne"
          src={imageOneBlurred}
          width="525"
          height="400"
          alt="blurOne"
        />
      )}
      {/***************** Second Card ******************/}
      {showCardTwo ? (
        <Card
          onMouseOver={() => setShowCardTwo(false)}
          className={classes.root}
          variant="outlined"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src="https://sharp-wescoff-20e282.netlify.app/static/media/aTwo.4fad255a.jpg"
            alt=""
            width="525"
            height="400"
          />
        </Card>
      ) : (
        <img
          className="blurredImages"
          onMouseOut={() => setShowCardTwo(true)}
          src={imageTwoBlurred}
          width="525"
          height="400"
          alt="blurTwo"
        />
      )}

      {/***************** Third Card ******************/}
      {showCardThree ? (
        <Card
          onMouseOver={() => setShowCardThree(false)}
          className={classes.root}
          variant="outlined"
        >
          <img 
            data-aos="fade-up"
            data-aos-duration="2000"
            src="https://sharp-wescoff-20e282.netlify.app/static/media/aThree.005f5082.jpg"
            alt=""
            width="525"
            height="400"
          />
        </Card>
      ) : (
        <img
        className="hvr-grow"
          // className="blurredImages"
          onMouseOut={() => setShowCardThree(true)}
          src={imageThreeBlurred}
          width="525"
          height="400"
          alt="blurThree"
        />
      )}
    </div>
  );
};


export default SimpleCard;
