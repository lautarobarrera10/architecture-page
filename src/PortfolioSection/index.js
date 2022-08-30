import React from "react";
import './PortfolioSection.css';

function PortfolioSection() {
    return(
        <section className="PortfolioSection">
            <h2>Portfolio</h2>
            <p className="PortfolioSection-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus dolor a ipsum volutpat varius. Curabitur maximus suscipit odio ut tempus.</p>
            <div className="Proyectos-Container">
                <div className="Proyecto-Container">
                    <img src="https://i.blogs.es/a2364c/casa_de_cristal_p.j/1366_2000.jpg" alt="La Casa de Cristal"/>
                    <div className="Proyecto">
                        <p>La Casa de Cristal</p>
                    </div>
                </div>
                <div className="Proyecto-Container">
                    <img src="https://i.blogs.es/7bacf7/12523885_980572005359447_5070007664698004341_n/1366_2000.jpg" alt="Villa Savoye"/>
                    <div className="Proyecto">
                        <p>Villa Savoye</p>
                    </div>
                </div>
                <div className="Proyecto-Container">
                    <img src="https://i.blogs.es/f4d939/villa-mairea/1366_2000.jpg" alt="Villa Mairea"/>
                    <div className="Proyecto">
                        <p>Villa Mairea</p>
                    </div>
                </div>
                <div className="Proyecto-Container">
                    <img src="https://i.blogs.es/afce05/11152702_10153296417395087_8714070336156227107_n/1366_2000.jpg" alt="Casa Rose Seidler"/>
                    <div className="Proyecto">
                        <p>Casa Rose Seidler</p>
                    </div>
                </div>
                <div className="Proyecto-Container">
                    <img src="https://i.blogs.es/439f3b/casa1/1366_2000.png" alt="La Casa de la Cascada"/>
                    <div className="Proyecto">
                        <p>La Casa de la Cascada</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { PortfolioSection }