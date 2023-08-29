import { Link } from 'react-router-dom';

const SlideContent = ({ link, title, text, subtitle }) => (
  <div className='SlideConent'>
      <Link to={link} className="carousel-title-link">
        <div className="carousel-title">{title}</div>
      </Link>
      <div className='carousel-subtitle'>{subtitle}</div>
      <div className="carousel-text">{text}</div>
      <Link to={link} className="carousel-inner-link">
        Voir le projet 
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
  </div>
);

export default SlideContent;
