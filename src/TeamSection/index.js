import React from "react";
import './TeamSection.css';

function TeamSection() {
    return(
        <React.Fragment>
            <div className="TeamSection-Background">
                <section className="TeamSection">
                    <h2 className="TeamSection-Title">NUESTRO EQUIPO</h2>
                    <p className="TeamSection-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu vulputate lacus. Cras non elit sed nisl sagittis tempus. Vivamus placerat dolor vitae cursus sodales. Phasellus vitae neque iaculis, placerat metus sed, pulvinar massa. Duis maximus justo sed gravida tempus. Ut ac vulputate orci. Proin non ipsum nisi. Vestibulum vel nunc augue.</p>
                </section>
            </div>
            <div className="TeamMember-Container">
                    <div className="TeamMember">
                        <div className="TeamMember-Image-Container">
                            <img className="TeamMember-Image" src="https://images.pexels.com/photos/2415938/pexels-photo-2415938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lucia Guerrero"/>
                        </div>
                        <h3 className="TeamMember-Name">Lucia Guerrero</h3>
                        <div className="Divider"></div>
                    </div>
                    <div className="TeamMember">
                        <div className="TeamMember-Image-Container">
                            <img className="TeamMember-Image" src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Camila Luckywisky"/>
                        </div>
                        <h3 className="TeamMember-Name">Camila Luckywisky</h3>
                        <div className="Divider"></div>
                    </div>
                    <div className="TeamMember">
                        <div className="TeamMember-Image-Container">
                            <img className="TeamMember-Image" src="https://images.pexels.com/photos/1205706/pexels-photo-1205706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Andrea Benavides"/>
                        </div>
                        <h3 className="TeamMember-Name">Andrea Benavides</h3>
                        <div className="Divider"></div>
                    </div>
            </div>
        </React.Fragment>
    );
}

export { TeamSection }