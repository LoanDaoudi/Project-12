import React, { useRef } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from '@fortawesome/free-regular-svg-icons';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter une logique pour envoyer l'email à votre adresse
        // Par exemple en utilisant un service comme SendGrid, Mailgun ou autre.
        alert("Message envoyé !");
    };

    return (
        <div className="Form">
            <h4 id="contact-me">Me Contacter :</h4>
            <div className="Email-onclick" onClick={copyEmailToClipboard} ref={emailRef} style={{ padding: "5px", cursor: "pointer"}}>
                <p>loanmateo.daoudi@gmail.com</p>
                <FontAwesomeIcon icon={faCopy} />
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
