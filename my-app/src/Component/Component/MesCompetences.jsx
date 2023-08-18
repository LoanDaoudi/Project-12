import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitAlt, faReact, faNodeJs, faJs, faHtml5, faCss3Alt, faSass } from '@fortawesome/free-brands-svg-icons';
import MongoLogo from "./Images/mongodb-logo.png";
import Postmanlogo from "./Images/PostmanLogo.png";
import NetlifyLogo from "./Images/netlify-logopng.png"
import JqueryLogo from "./Images/jquery-logo.png"
import SqlLogo from "./Images/SqlLogo.png"
import './Style-Component/Skills.css'

const Skills = () => {
    return (
        <div className="Skills">
            <h3>Mes compétences :</h3>
            
            <div className="categories">
                
                <div className="category front-end">
                    <h4>Front-end</h4>
                    <div className="category-content">
                        <FontAwesomeIcon icon={faReact} className="icon" id='ReactLogo' />
                        <FontAwesomeIcon icon={faJs} className="icon" id='ReactJs'/>
                        <FontAwesomeIcon icon={faHtml5} className="icon" id='ReactHtml'/>
                        <FontAwesomeIcon icon={faCss3Alt} className="icon" id='ReactCss'/>
                        <FontAwesomeIcon icon={faSass} className="icon" id='ReactSass'/>
                    </div>
                </div>

                
                <div className="category back-end">
                    <h4>Back-end</h4>
                    <div className="category-content">
                        <FontAwesomeIcon icon={faNodeJs} className="icon" id='ReactNode'/>
                        <img src={SqlLogo} alt='MySql Logo' className='picture'  id='SqlLogo'/>
                        <img src={MongoLogo} alt="MongoDB logo" className="picture" id='MongoLogo'/>
                    </div>
                </div>

                
                <div className="category tools">
                    <h4>J'ai pu travailler avec :</h4>
                    <div className="category-content">
                        <FontAwesomeIcon icon={faGithub} className="icon" id='ReactGithub'/>
                        <FontAwesomeIcon icon={faGitAlt} className="icon" id='ReactGit'/>
                        <img src={Postmanlogo} alt="Postman logo" className="picture" id='PostmanLogo'/>
                        <img src={NetlifyLogo} alt="Netlify logo" className="picture" id='NetlifyLogo'/>
                        <img src={JqueryLogo} alt="jQuery logo" className="picture" id='JqueryLogo'/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Skills;
