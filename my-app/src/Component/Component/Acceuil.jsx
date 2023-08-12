import React from 'react';
import Header from './Header';
import Presentation from './Presentation';
import Carroussel from './Carroussel';
import Image1 from "./Images/caroussel1.jpeg";
import Image2 from "./Images/caroussel2png.png";
import Image3 from "./Images/caroussel3.avif";

const Accueil = () => {
  const images = [Image1,];

  return (
    <div>
    <Header/>
    <Presentation/>
    <Carroussel images={images}/>
    </div>
  );
};

export default Accueil;
