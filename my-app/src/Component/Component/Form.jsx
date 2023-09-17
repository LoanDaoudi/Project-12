import React, { useRef } from "react";
import Button from "./Button";
import cvPdf from './CV de Loan Daoudi.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    const emailRef = useRef(null);

    const copyEmailToClipboard = () => {
        const range = document.createRange();
        range.selectNode(emailRef.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();

        alert("Email copié !");
    };

    const downloadCV = () => {
        const a = document.createElement('a');
        a.href = cvPdf; 
        a.download = 'CV de Loan Daoudi.pdf'; 
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message envoyé !");
    };

    return (
        <div className="Form">
            <h4 id="contact-me">Me Contacter :</h4>
            <div className="Email-onclick" onClick={copyEmailToClipboard} ref={emailRef} style={{ padding: "5px", cursor: "pointer"}}>
                <p>loanmateo.daoudi@gmail.com</p>
                <FontAwesomeIcon icon={faCopy} className="logo-copy" />
            </div>
            <div className="Email-onclick" onClick={downloadCV} style={{ padding: "5px", cursor: "pointer"}}>
                <p>Télécharger mon CV </p>
                <FontAwesomeIcon icon={faDownload} className="logo-copy" />
            </div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message" rows="4" required></textarea>
                <Button label="Envoyer"/>
            </form>
        </div>
    );
};

export default Form;
