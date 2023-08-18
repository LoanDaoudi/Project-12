import React from "react";
import './Style-Component/MenuBurger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Menu = () => {
    const handleOverlayClick = () => {
        document.getElementById("burger").checked = false;
    }

    return (
        <div className="burger-menu-container">
            <a id="logo" href="#" target="_blank" rel="noopener noreferrer"></a>
            <form id="form1">
                <input type="checkbox" name="burger" id="burger"/>
                <label htmlFor="burger" id="menu-burger">
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                </label>
                <div className="overlay" onClick={handleOverlayClick}></div>
                <nav id="menu">
                    <div className="close-icon" onClick={handleOverlayClick}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <ul>
                        <li><a href="#a-propos">A Propos</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#">Projets</a></li>
                        <li><a href="#Skills">Compétences</a></li>
                        <li><a href="#">Formations</a></li>
                        <li><a href="#">Formations</a></li>
                        <li><a href="#">Formations</a></li>
                        <li><a href="#">Formations</a></li>
                        <li><a href="#">Formations</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="github-icon">
                        <a href="https://github.com/LoanDaoudi" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </nav>
            </form>
        </div>
    );
}



export default Menu;
