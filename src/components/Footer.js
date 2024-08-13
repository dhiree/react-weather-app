import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container text-center">
                <p>&copy; 2024 TechSphere Inc. All rights reserved.</p>
                <div className="social-icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
