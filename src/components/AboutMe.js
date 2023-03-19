import aboutMeImg from "../images/me.png";
import SocialIcons from "../components/SocialIcons";
import { useState } from "react";
import resume from "../pages/about/hoger-shoresh.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Hoger-Shoresh-Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <div className="personalInfo col-12 col-lg-8">
          <div className="contentContainer">
            <h4>Let's work together!</h4>
            <h5>I'm a frontend developer, excited to code with you!</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Hoger Shoresh</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>

                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="personalImage col-12 col-lg-4">
          <img src={aboutMeImg} alt={name} />
        </div>
      </div>
    </div >
  );
};

export default AboutMe;
