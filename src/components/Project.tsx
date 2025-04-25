import React from "react";
import harvey from '../assets/images/chatbot.jpg';
import hermony from '../assets/images/Hermony.png';
import imgCraft from '../assets/images/imageCraft.jpg';
import stockUp from '../assets/images/StockUp.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><img src={harvey} className="zoom project-image" alt="thumbnail" width="70%" /></a>
                    <a href="https://github.com/ashrane111/AI-GovBot" target="_blank" rel="noreferrer"><h2>HARVEY</h2></a>
                    <p>Developed a legal advisory chatbot using RAG architecture with FAISS for vector storage, LangChain for document chunking, Airflow for pipeline orchestration, and MLFlow for model tracking. Implemented context-aware responses with 90% accuracy on legal queries.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/hrishikasamani/Hermony" target="_blank" rel="noreferrer"><img src={hermony} className="zoom project-image" alt="thumbnail" width="70%" /></a>
                    <a href="https://github.com/hrishikasamani/Hermony" target="_blank" rel="noreferrer"><h2>Hermony</h2></a>
                    <p>Built a React/TypeScript platform with Firebase authentication and Firestore database for women in tech. Created a custom work-life balance algorithm measuring activity ratios and implemented a mentorship matching system using profile similarity scoring.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/Dhanshreeb05/ImageProcessing" target="_blank" rel="noreferrer"><img src={imgCraft} className="zoom project-image" alt="thumbnail" width="70%" /></a>
                    <a href="https://github.com/Dhanshreeb05/ImageProcessing" target="_blank" rel="noreferrer"><h2>ImageCraft</h2></a>
                    <p>Engineered a Java Swing MVC application implementing custom image processing algorithms for diverse operations. Utilized BufferedImage for pixel manipulation, multi-threading for performance optimization, and command pattern for operation history.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/Dhanshreeb05/StockUp" target="_blank" rel="noreferrer"><img src={stockUp} className="zoom project-image" alt="thumbnail" width="70%" /></a>
                    <a href="https://github.com/Dhanshreeb05/StockUp" target="_blank" rel="noreferrer"><h2>StockUp</h2></a>
                    <p>Architected a full-stack application using Angular, Node.js/Express, and MySQL with JWT authentication. Integrated real-time market data via WebSockets, implemented RESTful API endpoints for CRUD operations, and designed responsive UI with Angular Material components.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;