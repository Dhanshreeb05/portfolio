import React from "react";
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed a chatbot for legal advice using RAG, Langchain, Airflow, MLFlow, Tensorflow.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;