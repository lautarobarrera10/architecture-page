import React from "react";
import './Header.css';
import Logo from './ap_logo.png';

function Header() {
    return(
        <header className="Header">
            <div className="Logo-Container">
                <img className="Logo" src={Logo} alt="AP Logo"/>
                <h1>Architecture Page</h1>
            </div>
            <ul>
                <li className="Active_Page">Home</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </header>
    )
}

export { Header }