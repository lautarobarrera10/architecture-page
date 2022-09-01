import React from "react";
import { Button } from "../Button";
import './PortfolioSection.css';
import { Proyecto } from './Proyecto';

const proyectos = [
    {
        name: 'La Casa de Cristal',
        img: 'https://i.blogs.es/a2364c/casa_de_cristal_p.j/1366_2000.jpg'
    },
    {
        name: 'Villa Savoye',
        img: 'https://i.blogs.es/7bacf7/12523885_980572005359447_5070007664698004341_n/1366_2000.jpg'
    },
    {
        name: 'Villa Mairea',
        img: 'https://i.blogs.es/f4d939/villa-mairea/1366_2000.jpg'
    },
    {
        name: 'Casa Rose Seidler',
        img: 'https://i.blogs.es/afce05/11152702_10153296417395087_8714070336156227107_n/1366_2000.jpg'
    },
    {
        name: 'La Casa de la Cascada',
        img: 'https://i.blogs.es/439f3b/casa1/1366_2000.png'
    },
    {
        name: 'Capilla Bosjes',
        img: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2020/12/031-Los-100-Mejores-Proyectos-Arquitectonicos-del-Siglo-XXI-image79.jpg'
    },
];

function PortfolioSection() {
    return(
        <section className="PortfolioSection">
            <h2>Portfolio</h2>
            <p className="PortfolioSection-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus dolor a ipsum volutpat varius. Curabitur maximus suscipit odio ut tempus.</p>
            <div className="Proyectos-Container">
                {proyectos.map(proyecto => {
                    console.log(proyecto);
                    return(
                        <Proyecto
                        imageURL={proyecto.img}
                        proyectName={proyecto.name}
                        />
                    )
                })}
            </div>
            <Button color={'black'} centred={true}>
                Ver más proyectos
            </Button>
        </section>
    );
}

export { PortfolioSection }