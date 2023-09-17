import React from "react";
import Button from "./Button";
import GithubLogo from "./Images/GitHub-Logo.png"
import './Style-Component/Apropos.css'

const Descriptif = () => {
    return(
        <div className="Descriptif">
            <h1>Loan Daoudi</h1>
            <h4>Développeur Front-end</h4>
            <p>Je suis passionné par le développement front-end et le web design, étant sensibilisé à l'expérience utilisateur et l'accessibilité, je développe des projets centrés autour de l'Humain.

De plus, je suis intéressé par le monde de l'open-source, je suis contributeur de plusieurs projets et je suis en parallèle attiré par l'enseignement (talks, articles, mentoring).
            </p>
            <div className="Button-div">
                <Button label="Me Contacter" href="#contact-me" />
                <Button imageUrl={GithubLogo}  href="https://github.com/LoanDaoudi" newTab={true}/>
            </div>
        </div>
    );
};

export default Descriptif;