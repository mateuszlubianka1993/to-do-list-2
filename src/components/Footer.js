import React from 'react';
import { MDBBtn } from "mdbreact";
import './style/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="name-box">&copy; {new Date().getFullYear()} Copyright: Mateusz Łubianka</div>
            <div className="social-box">
                <a href="https://github.com/mateuszlubianka1993" rel="noopener noreferrer" target="_blank" ><MDBBtn className="social-buttons git" rounded>Github</MDBBtn></a>
                <a href="https://www.linkedin.com/in/mateuszlubianka/" rel="noopener noreferrer" target="_blank"><MDBBtn className="social-buttons linkedin" rounded>Linkedin</MDBBtn></a>
            </div>
        </div>
    );
};

export default Footer;
