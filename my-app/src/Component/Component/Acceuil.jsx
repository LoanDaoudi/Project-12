import React from 'react';
import Header from './Header';
import Presentation from './Presentation';
import Carroussel from './Carroussel';
import Footer from './Footer';
import MesServices from './MesServics';
import Image1 from "./Images/CarouselProjet1.png";
import Image2 from "./Images/CarouselProjet2.png";
import Image3 from "./Images/CarouselProjet3.png";
import Image4 from "./Images/CarouselProjet4.png";
import Image5 from "./Images/CarouselProjet5.png";
const Accueil = () => {
  const slides = [
    {
      image: Image1,
      title: 'Booki',
      subtitle: 'Site de location pour vacances',
      text: 'Description 1',
      link: 'lien1.com'

    },

    {
      image: Image2,
      title: 'Ohmyfood',
      subtitle: 'Réserver et manger en deux clics',
      text: 'Description 1',
      link: 'lien1.com'
    },

    {
      image: Image3,
      title: 'Print it !',
      subtitle: 'fff',
      text: 'Description 1',
      link: 'lien1.com'
    },

    {
      image: Image4,
      title: 'Kasa',
      subtitle: 'fff',
      text: 'Description 1',
      link: 'lien1.com'
    },

    {
      image: Image5,
      title: 'Titre 1',
      subtitle: 'fff',
      text: 'Description 1',
      link: 'lien1.com'
    },
  ];

  return (
    <body>
      <div className='Main'>
      <Header/>
      <div id="a-propos"><Presentation /></div>
      <Carroussel slides={slides}/>
      <div id="services"><MesServices /></div>
      </div>
      <div className='Footer-poisition'>
      <div id="contact"><Footer /></div>
      </div>
    </body>
    
  );
};

export default Accueil;
