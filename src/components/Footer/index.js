import React from 'react';
import logo from '../../assets/img/rLogo.png';
import './styles.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <img class="logoFooter" src={logo} alt="Logo" />
            </div>
        </footer>
    );
};

export default Footer;