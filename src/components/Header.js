import React from 'react';
import { MDBIcon } from "mdbreact";
import './style/Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <h1><span className="color-letter">T</span>o <span className="color-letter">D</span>o <span className="color-letter">L</span>ist <span className="color-letter"><MDBIcon icon="feather-alt" size="lg"/></span></h1>
        </div>
    );
};

export default Header;
