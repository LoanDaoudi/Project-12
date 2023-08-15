import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarrePresentation = ({ icon, subtitle, text }) => {
    return(
        <div className="CarrePresentation">
            <FontAwesomeIcon icon={icon} className="icon-carre" />
            <h4>{subtitle}</h4>
            <p>{text}</p>
        </div>
    );
};

export default CarrePresentation;
