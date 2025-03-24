import React from "react";
import harvey from '../assets/images/chatbot.jpg';
import hermony from '../assets/images/Hermony.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><img src={harvey} className="zoom project-image" alt="thumbnail" width="70%"/></a>
                <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><h2>HARVEY</h2></a>
                <p>Developed a chatbot for legal advice using RAG, Langchain, Airflow, MLFlow, Tensorflow.</p>
            </div>
            <div className="project">
                <a href="https://github.com/hrishikasamani/Hermony" target="_blank" rel="noreferrer"><img src={hermony} className="zoom project-image" alt="thumbnail" width="70%"/></a>
                <a href="https://github.com/hrishikasamani/Hermony" target="_blank" rel="noreferrer"><h2>Hermony</h2></a>
                <p>Developed a platform helps women in tech harmonize their professional and personal lives through smart scheduling, mentorship, and community support.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;