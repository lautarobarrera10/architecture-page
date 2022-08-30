import React from "react";
import Logo from '../Header/ap_logo.png';
import './LogoSection.css';

function LogoSection() {
    return(
        <section className="LogoSection">
            <img src={Logo} alt="Logo de Architecture Page"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus dolor a ipsum volutpat varius. Curabitur maximus suscipit odio ut tempus. Nunc in massa scelerisque, pulvinar nisi sit amet, fringilla eros. Maecenas nibh dui, pretium a rhoncus quis, elementum sed dolor. Phasellus quis magna imperdiet, rhoncus erat vel, cursus risus. Nullam at metus rhoncus, sollicitudin quam eget, commodo sem.</p>
        </section>
    );
}

export { LogoSection }