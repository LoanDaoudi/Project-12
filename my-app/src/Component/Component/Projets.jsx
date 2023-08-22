import React, { useState } from 'react';
import ProjetItem from './Style-Component/DetailsProjets';
import Image1 from "./Images/CarouselProjet1.png";
import Image2 from "./Images/CarouselProjet2.png";
import Image3 from "./Images/CarouselProjet3.png";
import Image4 from "./Images/CarouselProjet4.png";
import Image5 from "./Images/CarouselProjet5.png";
import './Style-Component/Projets.css';

const slides = [
  {
    image: Image1,
    title: 'Booki',
    subtitle: 'Site de location pour vacances',
    text: 'Découvrez un site conçu avec passion, entièrement codé en HTML/CSS, qui offre aux voyageurs et aux vacanciers une plateforme élégante et conviviale pour trouver leur lieu de séjour idéal.',
    link: 'lien1.com',
    category: "html/css",
  },

  {
    image: Image2,
    title: 'Ohmyfood',
    subtitle: 'Réserver et manger en deux clics',
    text: 'Plongez dans une expérience culinaire réinventée avec OhmyFood, la plateforme ultime pour les gourmets et les restaurateurs. Conçu avec une attention particulière aux détails, notre site, élaboré en HTML/CSS, allie fonctionnalité et esthétique.',
    link: 'lien1.com',
    category: "html/css",

  },

  {
    image: Image3,
    title: 'Print it !',
    subtitle: 'Animation Javascript et Référencement',
    text: 'Découvrez une plateforme dynamique, animée par la puissance du JavaScript, offrant à ses utilisateurs une expérience fluide, interactive et réactive. Print it ! ne se contente pas de vous offrir un site élégant : nous avons également mis l accent sur une visibilité inégalée sur le web.',
    link: 'lien1.com',
    category: ["js", "react"],
  },

  {
    image: Image4,
    title: 'Kasa',
    subtitle: 'Animations qui donne vie à un site',
    text: 'Entrez dans un monde numérique où chaque pixel s anime, chaque détail prend vie. Sur Kasa, nous repoussons les limites de ce qu un design web peut accomplir, grâce à une utilisation audacieuse et créative des animations CSS.',
    link: 'lien1.com',
    category: ["js", "react"],
  },

  {
    image: Image5,
    title: 'Nica Carducci',
    subtitle: 'Développement d un Portfolio',
    text: 'Découvrez une présentation professionnelle qui transcende le digital. Conçu exclusivement avec React, ce portfolio offre une expérience utilisateur fluide et réactive, reflétant le dynamisme et la passion du client pour son métier.',
    link: 'lien1.com',
    category: "autres",

  },
];

const Projets = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className='Projets' id='Projets'>

    <div className="projets-container">
        {slides.map((slide, index) => (
            <ProjetItem key={index} details={slide} isVisible={!selectedCategory || slide.category.includes(selectedCategory)} />
        ))}
    </div>
</div>
  );
};

export default Projets;
