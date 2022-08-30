import React from "react";
import { Button } from "../Button";
import './PortfolioSection.css';
import { Proyecto } from './Proyecto';

function PortfolioSection() {
    return(
        <section className="PortfolioSection">
            <h2>Portfolio</h2>
            <p className="PortfolioSection-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus dolor a ipsum volutpat varius. Curabitur maximus suscipit odio ut tempus.</p>
            <div className="Proyectos-Container">
                <Proyecto
                    imageURL={'https://i.blogs.es/a2364c/casa_de_cristal_p.j/1366_2000.jpg'}
                    proyectName={'La Casa de Cristal'}
                />
                <Proyecto
                    imageURL={'https://i.blogs.es/7bacf7/12523885_980572005359447_5070007664698004341_n/1366_2000.jpg'}
                    proyectName={'Villa Savoye'}
                />
                <Proyecto
                    imageURL={'https://i.blogs.es/f4d939/villa-mairea/1366_2000.jpg'}
                    proyectName={'Villa Mairea'}
                />
                <Proyecto
                    imageURL={'https://i.blogs.es/afce05/11152702_10153296417395087_8714070336156227107_n/1366_2000.jpg'}
                    proyectName={'Casa Rose Seidler'}
                />
                <Proyecto
                    imageURL={'https://i.blogs.es/439f3b/casa1/1366_2000.png'}
                    proyectName={'La Casa de la Cascada'}
                />
                <Proyecto
                    imageURL={'https://www.re-thinkingthefuture.com/wp-content/uploads/2020/12/031-Los-100-Mejores-Proyectos-Arquitectonicos-del-Siglo-XXI-image79.jpg'}
                    proyectName={'Capilla Bosjes'}
                />
            </div>
            <Button color={'black'} centred={true}>
                Ver más proyectos
            </Button>
        </section>
    );
}

export { PortfolioSection }