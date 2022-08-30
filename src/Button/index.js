import React from "react";
import './Button.css'

function Button({children, color, centred}) {
    let center = '';
    if (centred) {center = 'center';}

    return(
        <button className={`Button ${color} ${center}`}>
            {children}
        </button>
    );
}

export { Button }