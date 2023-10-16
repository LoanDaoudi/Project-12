import React from "react";
import CarrePresentation from "./CarrePresentation";
import { faDesktop, faChartPie, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Style-Component/MesServices.css'

const MesServices = () => {
    return(
        <div className="MesServices">
            <h3>Aptitudes </h3>
        <div className="MesServices-Carre">
            <CarrePresentation icon={faDesktop} subtitle="Applications " text="Développer des sites vitrines, applications web, mobile ou de bureau." />
            <CarrePresentation icon={faChartPie} subtitle="Expériences utilisateur " text="Favoriser l'intuitivité et la fluidité des interfaces client." />
            <CarrePresentation icon={faCodeBranch} subtitle="Accessibilité " text="Perceptible par tous, utilisable par tous, compréhensible par tous" />
        </div>
        </div>
    );
};

export default MesServices;