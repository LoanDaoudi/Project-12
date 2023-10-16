import React from "react";
import ProfilePicture from "./Profile Picture";
import Descriptif from "./Descriptif";
import './Style-Component/Apropos.css'

const Presentation = () => {
    return (
        <div className="Presentation">
            <ProfilePicture/>
            <Descriptif/>
        </div>

    );
};

export default Presentation;