import { useState } from 'react';

const Project = ({ technologies, title, image, color, github, deployed, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="col-sm-12 col-lg-6">
      <div
        className="projectCard"
        style={{ backgroundColor: color }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="imageContainer">
          <img src={image} alt="Application Screenshot" />
        </div>
        {hovered && (
          <div className="textWrap">
            <h3 className="projectTitle">{title}</h3>
            <p className="projectDescription">{description}</p>
            <div className="buttonsWrap">
              <button className="btn" onClick={() => window.open(github, '_blank')}>
                Github Repo
              </button>
              <button className="btn" onClick={() => window.open(deployed, '_blank')}>
                Deployed App
              </button>
            </div>
            <p className="tech">
              <em>{technologies}</em>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
