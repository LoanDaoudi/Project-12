import React from "react";
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
import './Style-Component/Nameofskills.css'

const skillsData = [
    { name: "MongoDB", logo: MongoLogo },
    { name: "Postman", logo: Postmanlogo },
    { name: "Netlify", logo: NetlifyLogo },
    { name: "Css", logo: Csslogo },
    { name: "Html", logo: HtmlLogo },
    { name: "Sql", logo: SqlLogo },
    { name: "React", logo: ReactLogo },
    { name: "Javascripct", logo: JsLogo },
    { name: "Sass", logo: SassLogo },
    { name: "NodeJs", logo: NodeLogo },
    { name: "Github", logo: GithubLogo },
    { name: "Git", logo: GitLogo },
    { name: "jQuery", logo: JqueryLogo },
  ];


const NameofSkills = () => {
    return(
        <div className="NameofSkills">
        <ul>
          {skillsData.map((skill, index) => (
            <li key={index}>
              <img src={skill.logo} alt={skill.name} width="50" height="50" />
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>

    );
};

export default NameofSkills