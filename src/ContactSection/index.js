import React from "react";
import './ContactSection.css';

function ContactSection() {
    return (
        <section className="ContactSection">
            <div className="ContactSection-SocialMedia-Container">
                <i className="ContactSection-SocialMediaIcon bi bi-facebook"></i>
                <i className="ContactSection-SocialMediaIcon bi bi-instagram"></i>
            </div>
            <div className="ContactSection-Contact-Container">
                <div className="ContactSection-Contact">
                    <i className="bi bi-telephone-fill"></i>
                    <p>+54 9 123456789</p>
                </div>
                <div className="ContactSection-Contact">
                    <i className="bi bi-envelope"></i>
                    <p>architecture@page.com</p>
                </div>
            </div>
        </section>
    )
}

export { ContactSection }