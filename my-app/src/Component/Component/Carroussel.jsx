import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

const Carroussel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);  


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Caroussel">
      <FontAwesomeIcon icon={faArrowLeft} className="Arrow-left" onClick={prevImage} />
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentImageIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Carrousel ${index}`} />
          </div>
        ))}
      </div>
      <div className="cercle-carousel">
        {images.map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faCircle}
            className={`cercle ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <FontAwesomeIcon icon={faArrowRight} className="Arrow-right" onClick={nextImage} />
    </div>
  );
};

export default Carroussel;
