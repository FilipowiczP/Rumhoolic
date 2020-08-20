import React, {useState} from "react";
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
                        <li className="header__navigation__list__element"><a href="#main">
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Głó<span className="contact__color">wna</span></a></li>
                        <li className="header__navigation__list__element"><a href="#rums">
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Ru<span className="contact__color">my</span></a>
                        </li>  <li className="header__navigation__list__element"><a href="#events">
                        <span className="animation"></span>
                        <span className="animation"></span>
                        <span className="animation"></span>
                        <span className="animation"></span>
                            Wydarz<span className="contact__color">enia</span></a></li>
                    </ul>
                </nav>
                <img src={logo} alt="logo" width="300px" height="300px" className="header__logo"/>
                <nav className="header__navigation">
                    <ul className="header__navigation__list">
                        <li className="header__navigation__list__element"><a href="#interview">
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Wywi<span className="contact__color">ady</span>
                        </a></li>
                        <li className="header__navigation__list__element"><a href="#tasting">
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Degus<span className="contact__color">tacja</span>
                        </a></li>
                        <li className="header__navigation__list__element"><a href="#footer">
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            <span className="animation"></span>
                            Kont<span className="contact__color">akt</span></a></li>
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
                            <li className="header__navigation__list__element"><a href="#main">Głó<span className="contact__color">wna</span></a></li>
                            <li className="header__navigation__list__element"><a href="#rums">Ru<span className="contact__color">my</span></a></li>
                            <li className="header__navigation__list__element"><a href="#rums">Wydarz<span className="contact__color">enia</span></a></li>
                            <li className="header__navigation__list__element"><a href="#interview">Wywi<span className="contact__color">ady</span></a></li>
                            <li className="header__navigation__list__element"><a href="#tasting">Degus<span className="contact__color">tacja</span></a></li>
                            <li className="header__navigation__list__element"><a href="#footer">Kont<span className="contact__color">akt</span></a></li>
                        </ul>
                    </nav>
                </header>

            </>
        )
    }
}

export default Header;