import React, {useState} from 'react';

const ProjetItem = ({ details, isVisible }) => {
    const [isActive, setIsActive] = useState(false);

    if (!isVisible) {
        return null;  // Si le projet n'est pas visible, ne rien rendre.
    }

    return (
        <div 
            className={`Projet-item ${isActive ? 'active' : ''}`} 
            onClick={() => setIsActive(!isActive)}
        >
            <img src={details.image} alt={details.title} />
            <div className="projet-content">
                <h2>{details.title}</h2>
                <p>{details.text}</p>
                <a href={details.link}>Voir plus</a>
            </div>
        </div>
    );
};

export default ProjetItem;
