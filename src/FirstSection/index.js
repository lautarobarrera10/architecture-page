import React from "react";
import './FirstSection.css';

function FirstSection({children}){
    return (
        <div className="FirstSection-Background">
            {children}
            <section className="FirstSection">
                <div className="FirstSection-Title-Container">
                    <h2 className="FirstSection-Title FirstSection-FirstTitle">Pasión</h2>
                    <h2 className="FirstSection-Title FirstSection-SecondTitle">Por la arquitectura</h2>
                </div>
                <button className="FirstSection-Button">Ver Proyectos</button>
            </section>
        </div>
    );
}

export { FirstSection }