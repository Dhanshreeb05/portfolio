import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Kotlin",
    "Python",
    "SQL",
    "Postman",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Kafka",
    "Active-MQ"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "GCP",
    "Linux",
    "Snowflake",
    "Pyspark",
    "MLFlow"
];

const labelsThird = [
    "Python",
    "Tensorflow",
    "NLP",
    "NLTK",
    "OpenAI",
    "LangChain",
    "Hugging Face",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I have built a diverse array of backend applications from scratch using modern technologies such as Java, Kotlin, Python. I have a strong proficiency in the SDLC process and frontend + backend development and AGILE methodologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ML & LLM</h3>
                    <p>Experienced in developing end-to-end machine learning projects and data pipelines. Skilled in implementing a variety of ML and DL algorithms from scratch, optimizing models, and deploying them for real-world applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & MLOps</h3>
                    <p>Proficient in MLOps and DevOps practices, with hands-on experience delivering applications to production on AWS, GCP, and Azure. Experienced in integrating version control, CI/CD pipelines, and monitoring systems to ensure reliable, efficient, and scalable deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;