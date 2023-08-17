import React from 'react';

const SlideContent = ({ link, title, text, subtitle }) => (
  <div className='SlideConent'>
      <a href={link} className="carousel-title-link">
        <div className="carousel-title">{title}</div>
      </a>
      <div className='carousel-subtitle'>{subtitle}</div>
      <div className="carousel-text">{text}</div>
      <a href={link} className="carousel-inner-link">
        Voir le projet 
        <span className="material-symbols-outlined">arrow_forward</span>
      </a>
  </div>
);

export default SlideContent;
