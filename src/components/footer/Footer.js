import React from "react";
import "./footer.scss";
import instagram from "./images/instagram1.png";

const Footer = () =>{

    return(
        <footer id="footer" className="footer">
            <h1 className="footer__text">Contact:</h1>
            <h2 className="footer__text">Mateusz Makuch</h2>
            <h2 className="footer__text">e-mail: mateusz.s.makuch@outlook.com</h2>
            <div className="footer__box">
                <a href="https://www.instagram.com/rumhoolic/?hl=pl" className="instagram"><img src={instagram} alt="instagram" className="instagram__foto" /></a>
                <p className="footer__box__text">Instagram @rumhoolic</p>
            </div>
        </footer>
    )
}

export default Footer;