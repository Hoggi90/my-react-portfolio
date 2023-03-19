import React from "react";
import landingImage from "../../images/me.png";
import SocialIcons from "../../components/SocialIcons";
import './landingMain.css';

const Landing = ({ name, tagline }) => {
  return (
    <section className="landing">
      <div className="textContainer">
        <h1 className="name">{name}</h1>
        <p className="description">{tagline}</p>
      </div>
      <div className="image-container">
        <img className="landingImage" src={landingImage} alt="" />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
