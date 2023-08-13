import React from "react";

const Button = ({ label, imageUrl, href }) => {
    return (
        <a href={href} className="Button-link">
            <button className="Button">
                {imageUrl && <img src={imageUrl} alt={label} />}
                {label}
            </button>
        </a>
    );
};

export default Button;