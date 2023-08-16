import React from 'react';

const SlideContent = ({ link, title, text, subtitle }) => (
  <div className='SlideConent'>
      <div className="carousel-title">{title}</div>
      <div className='carousel-subtitle'>{subtitle}</div>
      <div className="carousel-text">{text}</div>
      <a href={link} className="carousel-inner-link">Voir plus</a>
  </div>
);

export default SlideContent;
