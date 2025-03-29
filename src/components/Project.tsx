import React from "react";
import harvey from '../assets/images/chatbot.jpg';
import hermony from '../assets/images/Hermony.png';
import imgCraft from '../assets/images/imageCraft.jpg';
import stockUp from '../assets/images/StockUp.jpg';
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
            <div className="project">
                <a href="https://github.com/Dhanshreeb05/ImageProcessing" target="_blank" rel="noreferrer"><img src={imgCraft} className="zoom project-image" alt="thumbnail" width="70%"/></a>
                <a href="https://github.com/Dhanshreeb05/ImageProcessing" target="_blank" rel="noreferrer"><h2>ImageCraft</h2></a>
                <p>Developed an Image Processing Application in Java and Swing to perform various operations like crop, darken, brighten, greyscale and conversion, channel separation, etc on images.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Dhanshreeb05/StockUp" target="_blank" rel="noreferrer"><img src={stockUp} className="zoom project-image" alt="thumbnail" width="70%"/></a>
                <a href="https://github.com/Dhanshreeb05/StockUp" target="_blank" rel="noreferrer"><h2>StockUp</h2></a>
                <p>A comprehensive stock trading and portfolio management application offering real-time market data, user authentication, transaction management, watchlists, and detailed financial insights.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;