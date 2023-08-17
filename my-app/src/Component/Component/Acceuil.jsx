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
      text: 'Découvrez un site conçu avec passion, entièrement codé en HTML/CSS, qui offre aux voyageurs et aux vacanciers une plateforme élégante et conviviale pour trouver leur lieu de séjour idéal.',
      link: 'lien1.com'

    },

    {
      image: Image2,
      title: 'Ohmyfood',
      subtitle: 'Réserver et manger en deux clics',
      text: 'Plongez dans une expérience culinaire réinventée avec OhmyFood, la plateforme ultime pour les gourmets et les restaurateurs. Conçu avec une attention particulière aux détails, notre site, élaboré en HTML/CSS, allie fonctionnalité et esthétique.',
      link: 'lien1.com'
    },

    {
      image: Image3,
      title: 'Print it !',
      subtitle: 'Animation Javascript et Référencement',
      text: 'Découvrez une plateforme dynamique, animée par la puissance du JavaScript, offrant à ses utilisateurs une expérience fluide, interactive et réactive. Print it ! ne se contente pas de vous offrir un site élégant : nous avons également mis l accent sur une visibilité inégalée sur le web.',
      link: 'lien1.com'
    },

    {
      image: Image4,
      title: 'Kasa',
      subtitle: 'Animations qui donne vie à un site',
      text: 'Entrez dans un monde numérique où chaque pixel s anime, chaque détail prend vie. Sur Kasa, nous repoussons les limites de ce qu un design web peut accomplir, grâce à une utilisation audacieuse et créative des animations CSS.',
      link: 'lien1.com'
    },

    {
      image: Image5,
      title: 'Nica Carducci',
      subtitle: 'Développement d un Portfolio',
      text: 'Découvrez une présentation professionnelle qui transcende le digital. Conçu exclusivement avec React, ce portfolio offre une expérience utilisateur fluide et réactive, reflétant le dynamisme et la passion du client pour son métier.',
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
