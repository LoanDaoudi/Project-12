import React, { useState, useEffect } from "react";
import SlideContent from "./Description-Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCircle } from "@fortawesome/free-solid-svg-icons";
import './Style-Component/Carousel.css'

const Carroussel = ({ slides }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3500);  


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Caroussel">
      <FontAwesomeIcon icon={faArrowLeft} className="Arrow-left" onClick={prevImage} />

      <div className="carousel-images">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentImageIndex ? "active" : ""}`}
          >
            <img src={slide.image} alt={`Carrousel ${index}`} />
            <SlideContent link={slide.link} title={slide.title} text={slide.text} subtitle={slide.subtitle} />
          </div>
        ))}
      </div>
      <div className="cercle-carousel">
        {slides.map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faCircle}
            className={`cercle ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)} 
          />
        ))}
      </div>
      <FontAwesomeIcon icon={faArrowRight} className="Arrow-right" onClick={nextImage} />
    </div>
  );
};

export default Carroussel;
