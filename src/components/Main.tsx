import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import photo from '../assets/images/photo.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={photo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Dhanshreeb05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dhanshree-baravkar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Dhanshree Suresh Baravkar</h1>
          <p>Software & Machine Learning Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Dhanshreeb05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dhanshree-baravkar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;