import { useState } from "react";
import Button from "../Button";
import "./HeroSection.css";

import homeImg from "/images/img-home.jpg";

const HeroSection = () => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${homeImg})`,
      }}
    >
      {/* <video src={videoClip} autoPlay loop muted /> */}
      <h1>Exploration Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        <Button
          onClick={() => setClick(!click)}
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
