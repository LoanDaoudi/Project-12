import React from 'react';
import Header from './Header';
import Presentation from './Presentation';
import Carroussel from './Carroussel';
import Footer from './Footer';
import MesServices from './MesServics';
import Image1 from "./Images/caroussel1.jpeg";
import Image3 from "./Images/caroussel3.avif";
import Image4 from "./Images/caroussel4.avif";

const Accueil = () => {
  const images = [Image1, Image3, Image4];

  return (
    <body>
      <div className='Main'>
      <Header/>
      <div id="a-propos"><Presentation /></div>
      <Carroussel images={images}/>
      <div id="services"><MesServices /></div>
      </div>
      <div className='Footer-poisition'>
      <div id="contact"><Footer /></div>
      </div>
    /</body>
    
  );
};

export default Accueil;
