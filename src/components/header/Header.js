import React, {useState} from "react";
import {Link} from "react-scroll";
import './header.scss';
import logo from './logo1.jpg';

const Header = () =>{
    const[active, setActive] = useState(false);

    const handleClick = () =>{
        if(active === true){
            setActive(false)
        }else {
            setActive(true)
        }
    }

    if(window.innerWidth >= 1024){
        return(
            <header className="header">
                <nav className="header__navigation">
                    <ul className="header__navigation__list">
                        <Link className="header__navigation__list__element" activeClass="active" to="main" smooth={true} offset={-200} duration={500}>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Głó<span className="contact__color">wna</span></Link>
                        <Link className="header__navigation__list__element" activeClass="active" to="rums" smooth={true} offset={-200} duration={500}>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Ru<span className="contact__color">my</span></Link>  
                        <Link className="header__navigation__list__element" activeClass="active" to="events" smooth={true} offset={-100} duration={500}>
                        <span className="animation"></span>
                        <span className="animation"></span>
                        <span className="animation"></span>
                        <span className="animation"></span>
                            Wydarz<span className="contact__color">enia</span></Link>
                        <img src={logo} alt="logo" width="300px" height="300px" className="header__logo"/>
                        <Link className="header__navigation__list__element" activeClass="active" to="interview" smooth={true} offset={-50} duration={500}>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Wywi<span className="contact__color">ady</span></Link>
                        <Link className="header__navigation__list__element" activeClass="active" to="tasting" smooth={true} offset={-150} duration={500}>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Degus<span className="contact__color">tacja</span></Link>
                        <Link className="header__navigation__list__element" activeClass="active" to="footer" smooth={true} offset={-100} duration={500}>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Kont<span className="contact__color">akt</span></Link>
                    </ul>
                </nav>
            </header>
        )
    }else{
        return(
            <>
                <header className={active ? "header active__header": "header"}>
                    <img src={logo} width="100px" height="100px" />
                    <div onClick={handleClick} className={active ? "header__hamburger active__hamburger" : "header__hamburger"}>
                        <span className="header__hamburger__element"></span>
                        <span className="header__hamburger__element"></span>
                        <span className="header__hamburger__element"></span>
                    </div>
                    <nav className={active ? "header__navigation active__navigation" : "header__navigation"}>
                        <ul className="header__navigation__list">
                            <Link className="header__navigation__list__element" activeClass="active" to="main" smooth={true} offset={-100} duration={500}>Głó<span className="contact__color">wna</span></Link>
                            <Link className="header__navigation__list__element" activeClass="active" to="rums" smooth={true} offset={-150} duration={500}>Ru<span className="contact__color">my</span></Link>
                            <Link className="header__navigation__list__element" activeClass="active" to="events" smooth={true} offset={-250} duration={500}>Wydarz<span className="contact__color">enia</span></Link>
                            <Link className="header__navigation__list__element" activeClass="active" to="interview" smooth={true} offset={-210} duration={500}>Wywi<span className="contact__color">ady</span></Link>
                            <Link className="header__navigation__list__element" activeClass="active" to="tasting" smooth={true} offset={-180} duration={500}>Degus<span className="contact__color">tacja</span></Link>
                            <Link className="header__navigation__list__element" activeClass="active" to="footer" smooth={true} offset={-100} duration={500}>Kont<span className="contact__color">akt</span></Link>
                        </ul>
                    </nav>
                </header>

            </>
        )
    }
}

export default Header;