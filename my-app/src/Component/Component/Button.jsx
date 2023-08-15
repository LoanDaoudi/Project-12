import React from "react";

const Button = ({ label, imageUrl, href, newTab = false }) => {
    return (
        <a 
            href={href} 
            className="Button-link" 
            target={newTab ? "_blank" : "_self"} 
            rel={newTab ? "noopener noreferrer" : ""}
        >
            <button className="Button">
                {imageUrl && <img src={imageUrl} alt={label} />}
                {label}
            </button>
        </a>
    );
};

export default Button;