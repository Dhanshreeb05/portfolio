import React from "react";
import harvey from '../assets/images/chatbot.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><img src={harvey} className="zoom" alt="thumbnail" width="70%"/></a>
                <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><h2>HARVEY</h2></a>
                <p>Developed a chatbot for legal advice using RAG, Langchain, Airflow, MLFlow, Tensorflow.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;