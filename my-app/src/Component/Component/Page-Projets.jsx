import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Image1 from "./Images/CarouselProjet1.png";
import Image2 from "./Images/CarouselProjet2.png";
import Image3 from "./Images/CarouselProjet3.png";
import Image4 from "./Images/CarouselProjet4.png";
import Image5 from "./Images/CarouselProjet5.png";
import CssLogo from "./Images/Csslogo.png";
import HtmlLogo from "./Images/HtmlLogo.png";
import JsLogo from "./Images/JsLogo.png";
import ReactLogo from "./Images/ReactLogo.png";
import SassLogo from "./Images/Sasslogo.png";
import GitLogo from "./Images/GitLogo.png";
import GithubLogo from "./Images/GitHub-Logo.png";
import NodeLogo from "./Images/NodeLogopng.png";
import PostmanLogo from "./Images/PostmanLogo.png";
import MongoLogo from "./Images/mongodb-logo.png";
import JqueryLogo from "./Images/jquery-logo.png";
import Footer from './Footer';
import Header from './Header';
import './Style-Component/Page-Projet.css'



const PageProjet = () => {
  const { projectId } = useParams();

  const slides = [
    {
      id: '1',
      image: Image1,
      title: 'Booki',
      subtitle: 'Site de location pour vacances',
      text: 'Découvrez un site conçu avec passion, entièrement codé en HTML/CSS, qui offre aux voyageurs et aux vacanciers une plateforme élégante et conviviale pour trouver leur lieu de séjour idéal.',
      link: '/projets/1',
      detailedDescription:'Booki représente le début de mon aventure dans le monde du développement web. C est un site de location de séjours pour vacanciers, conçu avec passion et détermination en utilisant pour la première fois les langages HTML5 et CSS3. Grâce à HTML5, j ai structuré un site intuitif et facilement navigable, tandis que CSS3 m a permis d injecter du dynamisme avec un design attrayant. Au cœur de Booki se trouve une fonction de recherche avancée qui permet aux utilisateurs de filtrer les locations selon leurs préférences, et un espace personnel pour gérer les réservations et les informations personnelles. Plus qu un simple site web, Booki est le reflet de mes premières réalisations en matière de développement, une fierté qui m a poussé vers des horizons encore plus ambitieux.',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo],

    },

    {
      id: '2',
      image: Image2,
      title: 'Ohmyfood',
      subtitle: 'Réserver et manger en deux clics',
      text: 'Plongez dans une expérience culinaire réinventée avec OhmyFood, la plateforme ultime pour les gourmets et les restaurateurs. Conçu avec une attention particulière aux détails, notre site, élaboré en HTML/CSS, allie fonctionnalité et esthétique.',
      link: '/projets/2',
      detailedDescription:'Le projet Ohmyfood est une application innovante qui sert de plateforme double face, facilitant non seulement la réservation de repas par les clients, mais également la création de nouveaux menus par les restaurateurs. Cette application dynamique a été une opportunité idéale pour moi d explorer et de maitriser l utilisation de Sass pour la première fois, ce qui m a permis de développer des compétences supplémentaires dans la gestion de styles complexes et la création d une interface utilisateur plus interactive et attrayante.',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo, SassLogo],
    },

    {
      id: '3',
      image: Image3,
      title: 'Print it !',
      subtitle: 'Animation Javascript et Référencement',
      text: 'Découvrez une plateforme dynamique, animée par la puissance du JavaScript, offrant à ses utilisateurs une expérience fluide, interactive et réactive. Print it ! ne se contente pas de vous offrir un site élégant : nous avons également mis l accent sur une visibilité inégalée sur le web.',
      link: '/projets/3',
      detailedDescription:'Le projet Prinit marque mes premiers pas significatifs dans l univers de la programmation JavaScript, une étape cruciale dans mon parcours de développement de compétences en codage. Avec une attention particulière sur la création d un carrousel interactif, ce projet m a permis de me plonger profondément dans les nuances du langage JavaScript, d apprendre et d appliquer des concepts fondamentaux pour construire une fonctionnalité visuellement attrayante et fonctionnelle qui enrichit l expérience utilisateur sur le site.',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo, JsLogo, JqueryLogo],
    },

    {
      id: '4',
      image: Image4,
      title: 'Kasa',
      subtitle: 'Animations qui donne vie à un site',
      text: 'Entrez dans un monde numérique où chaque pixel s anime, chaque détail prend vie. Sur Kasa, nous repoussons les limites de ce qu un design web peut accomplir, grâce à une utilisation audacieuse et créative des animations CSS.',
      link: '/projets/4',
      detailedDescription:'Le projet Kasa a été une étape importante dans mon parcours de développeur, marquant ma première incursion dans l utilisation de React et, par conséquent, l intégration de ses composants dynamiques dans le développement d applications. Cette expérience a été amplifiée par la création de menus à sélection innovants et l exploration d animations CSS plus avancées qui ont permis d offrir une interface utilisateur riche et interactive. À travers ce projet, j ai pu non seulement élargir mon répertoire de compétences techniques mais également repousser les limites de ce que je pouvais accomplir en termes de design et de fonctionnalités web.',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo, JsLogo, JqueryLogo, SassLogo, ReactLogo, MongoLogo, PostmanLogo, NodeLogo],
    },

    {
      id: '5',
      image: Image5,
      title: 'Nica Carducci',
      subtitle: 'Développement d un Portfolio',
      text: 'Découvrez une présentation professionnelle qui transcende le digital. Conçu exclusivement avec React, ce portfolio offre une expérience utilisateur fluide et réactive, reflétant le dynamisme et la passion du client pour son métier.',
      link: '/projets/5',
      detailedDescription:'Le projet Nina Carducci a représenté un défi stimulant où j ai eu l occasion de travailler étroitement avec une cliente pour améliorer et optimiser son portfolio existant. Les principaux axes d intervention ont été l amélioration de l accessibilité du site, en garantissant une navigation fluide et intuitive pour tous les utilisateurs, ainsi que la formulation de propositions de développement pour les phases futures du projet. Cette collaboration m a permis de mettre en avant mes compétences en matière de conseil et d adaptation, tout en contribuant à façonner un produit digital qui non seulement répond aux besoins immédiats de la cliente, mais qui est également prêt pour les opportunités de croissance et d expansion futures.',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo, JsLogo, JqueryLogo, SassLogo, ReactLogo, MongoLogo, PostmanLogo, NodeLogo],
    },
  ];

const project = slides.find(slide => slide.id === projectId);

if (!project) {
    return <div>Projet non trouvé</div>;
  }

    return (
      <div>
      <div className="project-page">
        <Header/>
        <div className='linkdiv'> 
        <Link to="/Project-12" className='return-link'>Retour à l'accueil</Link>
        </div>
        <div className='title-header'>
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
        </div>
        <div className="project-content">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className='project-description'>
          <h1>{project.title}</h1>
          <p >{project.detailedDescription}</p>
          <div className='logo'>
          {project.logos.map((logoUrl, index) => (
            <img key={index} src={logoUrl} alt="Logo" className="project-logo" />
          ))}
          </div>
          </div>
        </div>
      </div>
      <Footer className='Footer'/>
    </div>
  );
};

export default PageProjet;