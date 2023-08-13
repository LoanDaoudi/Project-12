import React from "react";
import Button from "./Button";
import GithubLogo from "./Images/GitHub-Logo.png"

const Descriptif = () => {
    return(
        <div className="Descriptif">
            <h1>Loan Daoudi</h1>
            <h4>Développeur Front-end</h4>
            <p>Lorem Ipsum est un générateur de faux textes aléatoires...
            Lorem Ipsum est un générateur de faux textes aléatoires...
            Lorem Ipsum est un générateur de faux textes aléatoires...
            Lorem Ipsum est un générateur de faux textes aléatoires...
            Lorem Ipsum est un générateur de faux textes aléatoires...
            Lorem Ipsum est un générateur de faux textes aléatoires...
            Lorem Ipsum est un générateur de faux textes aléatoires...
            </p>
            <div className="Button-div">
                <Button label="Me Contacter" />
                <Button  imageUrl={GithubLogo}  href="https://github.com/LoanDaoudi"/>
            </div>
        </div>
    );
};

export default Descriptif;