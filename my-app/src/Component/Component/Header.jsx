import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Style-Component/Header.css'

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='header'>
            <div className="github-header" 
                 style={{ opacity: hasScrolled ? 1 : 0, pointerEvents: hasScrolled ? 'auto' : 'none' }}>
                <a href="https://github.com/LoanDaoudi" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className={`Logo ${hasScrolled ? "animate-logo" : ""}`} style={{ margin: hasScrolled ? '0 auto' : '0' }}>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }}>
                <Logo/>
            </a>
        </div>
            <Menu/>
        </div>
    );
};

export default Header;
