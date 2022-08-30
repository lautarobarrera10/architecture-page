import React from "react";
import './Header.css';
import Logo from './ap_logo.png';

function Header() {

    document.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('fixed', window.scrollY > 50);
    });

    return(
        <header className="Header">
            <div className="Logo-Container">
                <img className="Logo" src={Logo} alt="AP Logo"/>
                <h1>Architecture Page</h1>
            </div>
            <i className="Nav-Burger bi bi-list"></i>
            <ul>
                <li className="Active_Page">Home</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </header>
    )
}

export { Header }