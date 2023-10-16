import React from 'react';
import MongoLogo from "./Images/mongodb-logo.png";
import Postmanlogo from "./Images/PostmanLogo.png";
import NetlifyLogo from "./Images/netlify-logopng.png"
import JqueryLogo from "./Images/jquery-logo.png"
import SqlLogo from "./Images/SqlLogo.png"
import Csslogo from "./Images/Csslogo.png"
import HtmlLogo from "./Images/HtmlLogo.png"
import ReactLogo from "./Images/ReactLogo.png"
import JsLogo from "./Images/JsLogo.png"
import SassLogo from "./Images/Sasslogo.png"
import NodeLogo from "./Images/NodeLogopng.png"
import GithubLogo from "./Images/GitHub-Logo.png"
import GitLogo from "./Images/GitLogo.png"
import './Style-Component/Skills.css'

const Skills = () => {
    return (

        <div className="Skills">
            <h3>Compétences </h3>
            
            <div className="categories">
                
                <div className="category front-end">
                    <h4>Front-end</h4>
                    <div className="category-content">
                        <img src={ReactLogo} className="picture" id='ReactLogo' />
                        <img src={JsLogo} className="picture" id='ReactJs'/>
                        <img src={HtmlLogo} className="picture" id='ReactHtml'/>
                        <img src={Csslogo} className="picture" id='ReactCss'/>
                        <img src={SassLogo} className="picture" id='ReactSass'/>
                    </div>
                </div>

                
                <div className="category back-end">
                    <h4>Back-end</h4>
                    <div className="category-content">
                        <img src={NodeLogo} className="picture" id='ReactNode'/>
                        <img src={SqlLogo} alt='MySql Logo' className='picture'  id='SqlLogo'/>
                        <img src={MongoLogo} alt="MongoDB logo" className="picture" id='MongoLogo'/>
                    </div>
                </div>

                
                <div className="category tools">
                    <h4>J'ai pu travailler avec :</h4>
                    <div className="category-content">
                        <img src={GithubLogo} className="picture" id='ReactGithub'/>
                        <img src={GitLogo} className="picture" id='ReactGit'/>
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
