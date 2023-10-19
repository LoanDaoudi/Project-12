import React from 'react';
import skillsvideo from './Images/myskills.mp4';
import './Style-Component/Skills.css'

const Skills = () => {
    return (

        <div className="Skills">
            <h3>Compétences</h3>

            <div className="video-container">
                <video src={skillsvideo} autoPlay loop muted playsInline controls={false}></video>
            </div>
        </div>
    );
};


export default Skills;
