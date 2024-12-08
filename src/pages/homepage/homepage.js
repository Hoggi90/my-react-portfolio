import React from "react";
import HeroImage from "../../images/me.png";
import Socials from "../../components/Socials";

const Homepage = ({ tagline }) => {
  return (
    <section className="homepage">
      <div className="textContainer">
        <h1 className="name">Hi, I'm Hoggi!</h1>
        <p className="description">{tagline}</p>
      </div>
      <div className="image-container">
        <img className="heroimage" src={HeroImage} alt="" />
      </div>
      <Socials />
    </section>
  );
};

export default Homepage;
