import { useParams } from 'react-router-dom';
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
      detailedDescription:'',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo],

    },

    {
      id: '2',
      image: Image2,
      title: 'Ohmyfood',
      subtitle: 'Réserver et manger en deux clics',
      text: 'Plongez dans une expérience culinaire réinventée avec OhmyFood, la plateforme ultime pour les gourmets et les restaurateurs. Conçu avec une attention particulière aux détails, notre site, élaboré en HTML/CSS, allie fonctionnalité et esthétique.',
      link: '/projets/2',
      detailedDescription:'',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo, SassLogo],
    },

    {
      id: '3',
      image: Image3,
      title: 'Print it !',
      subtitle: 'Animation Javascript et Référencement',
      text: 'Découvrez une plateforme dynamique, animée par la puissance du JavaScript, offrant à ses utilisateurs une expérience fluide, interactive et réactive. Print it ! ne se contente pas de vous offrir un site élégant : nous avons également mis l accent sur une visibilité inégalée sur le web.',
      link: '/projets/3',
      detailedDescription:'',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo, JsLogo, JqueryLogo],
    },

    {
      id: '4',
      image: Image4,
      title: 'Kasa',
      subtitle: 'Animations qui donne vie à un site',
      text: 'Entrez dans un monde numérique où chaque pixel s anime, chaque détail prend vie. Sur Kasa, nous repoussons les limites de ce qu un design web peut accomplir, grâce à une utilisation audacieuse et créative des animations CSS.',
      link: '/projets/4',
      detailedDescription:'',
      logos: [CssLogo, HtmlLogo, GitLogo, GithubLogo, JsLogo, JqueryLogo, SassLogo, ReactLogo, MongoLogo, PostmanLogo, NodeLogo],
    },

    {
      id: '5',
      image: Image5,
      title: 'Nica Carducci',
      subtitle: 'Développement d un Portfolio',
      text: 'Découvrez une présentation professionnelle qui transcende le digital. Conçu exclusivement avec React, ce portfolio offre une expérience utilisateur fluide et réactive, reflétant le dynamisme et la passion du client pour son métier.',
      link: '/projets/5',
      detailedDescription:'',
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
      <div className='title-header'>
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      </div>
      <img src={project.image} alt={project.title} className="project-image" />
      <p className="project-description">{project.detailedDescription}</p>
      <div className="project-logos">
        {project.logos.map((logoUrl, index) => (
          <img key={index} src={logoUrl} alt="Logo" className="project-logo" />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PageProjet;