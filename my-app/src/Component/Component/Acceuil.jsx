import React from 'react';
import Header from './Header';
import Presentation from './Presentation';
import Carroussel from './Carroussel';
import Footer from './Footer';
import Image1 from "./Images/caroussel1.jpeg";
import Image3 from "./Images/caroussel3.avif";
import Image4 from "./Images/caroussel4.avif";

const Accueil = () => {
  const images = [Image1, Image3, Image4];

  return (
    <div>
      <div className='Main'>
      <Header/>
      <Presentation/>
      <Carroussel images={images}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Accueil;
