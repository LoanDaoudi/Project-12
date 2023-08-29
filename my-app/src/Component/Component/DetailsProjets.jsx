import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const ProjetItem = ({ details, isVisible }) => {
    const [isActive, setIsActive] = useState(false);

    if (!isVisible) {
        return null;  // 
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
                <Link to={details.link}>Voir plus</Link>
            </div>
        </div>
    );
};

export default ProjetItem;
