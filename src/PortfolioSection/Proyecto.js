import React from "react";
import './Proyecto.css';

function Proyecto({ imageURL, proyectName }) {
    return(
        <div className="Proyecto-Container">
            <img src={imageURL} alt={proyectName}/>
            <div className="Proyecto">
                <p>{proyectName}</p>
            </div>
        </div>
    );
}

export { Proyecto }