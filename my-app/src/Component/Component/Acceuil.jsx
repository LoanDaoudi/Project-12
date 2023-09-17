import React from 'react';
import Header from './Header';
import Presentation from './Presentation';
import Carroussel from './Carroussel';
import Footer from './Footer';
import MesServices from './MesServics';
import Skills from './MesCompetences';
import NameofSkills from './NameofSkills';
import Projets from './Projets';
import Image1 from "./Images/CarouselProjet1.png";
import Image2 from "./Images/CarouselProjet2.png";
import Image3 from "./Images/CarouselProjet3.png";
import Image4 from "./Images/CarouselProjet4.png";
import Image5 from "./Images/CarouselProjet5.png";

const Accueil = () => {

  const slides = [
    {
      id: '1',
      image: Image1,
      title: 'Booki',
      subtitle: 'Site de location pour vacances',
      text: 'Découvrez un site conçu avec passion, entièrement codé en HTML/CSS, qui offre aux voyageurs et aux vacanciers une plateforme élégante et conviviale pour trouver leur lieu de séjour idéal.',
      link: '/projets/1'

    },

    {
      id: '2',
      image: Image2,
      title: 'Ohmyfood',
      subtitle: 'Réserver et manger en deux clics',
      text: 'Plongez dans une expérience culinaire réinventée avec OhmyFood. Conçu avec une attention particulière aux détails, notre site, élaboré en HTML/CSS, allie fonctionnalité et esthétique.',
      link: '/projets/2'
    },

    {
      id: '3',
      image: Image3,
      title: 'Print it !',
      subtitle: 'Animation Javascript et Référencement',
      text: 'Explorez une plateforme dynamique, offrant une expérience fluide et interactive. Chez Print it !, nous  mettont l accent sur une visibilité exceptionnelle sur le web.',
      link: '/projets/3'
    },

    {
      id: '4',
      image: Image4,
      title: 'Kasa',
      subtitle: 'Animations qui donne vie à un site',
      text: ' Sur Kasa, nous repoussons les limites de ce qu un design web peut accomplir, grâce à une utilisation audacieuse et créative des animations CSS.',
      link: '/projets/4'
    },

    {
      id: '5',
      image: Image5,
      title: 'Nica Carducci',
      subtitle: 'Développement d un Portfolio',
      text: ' Conçu exclusivement avec React, ce portfolio offre une expérience utilisateur fluide et réactive, reflétant le dynamisme et la passion du client pour son métier.',
      link: '/projets/5'
    },
  ];

  return (
    <body>
      <div className='Main'>
      <Header/>
      <div id="a-propos"><Presentation /></div>
      <Carroussel slides={slides}/>
      <div id="services"><MesServices /></div>
      <div id='Skills'> <Skills/> </div>
      <div><NameofSkills/></div>
      <div><Projets /></div>
      </div>
      <div className='Footer-poisition'>
      <div id="contact"><Footer /></div>
      </div>
    </body>
    
  );
};

export default Accueil;
