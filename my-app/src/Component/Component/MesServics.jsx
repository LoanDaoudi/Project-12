import React from "react";
import CarrePresentation from "./CarrePresentation";
import { faDesktop, faChartPie, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Style-Component/MesServices.css'

const MesServices = () => {
    return(
        <div className="MesServices">
            <h3>Mes services :</h3>
        <div className="MesServices-Carre">
            <CarrePresentation icon={faDesktop} subtitle="Appliations :" text="Développe des sites vitrines, applications web, mobile ou de bureau." />
            <CarrePresentation icon={faChartPie} subtitle="Expériences utilisateur :" text="Une expérience fluide et magnifique pour vos clients." />
            <CarrePresentation icon={faCodeBranch} subtitle="Accessibilité :" text="Développement de site accessible à tous ." />
        </div>
        </div>
    );
};

export default MesServices;