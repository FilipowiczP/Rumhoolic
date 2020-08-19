import React, {useState} from "react";
import './header.scss';

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
                <div className="header__content">
                    <nav className="header__navigation">
                        <ul className="header__navigation__list">
                            <li className="header__navigation__list__element"><a href="#main">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Main</a></li>
                            <li className="header__navigation__list__element"><a href="#rums">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Rums</a>
                            </li>  <li className="header__navigation__list__element"><a href="#events">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Events</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__logo"></div>
                <div className="header__content">
                    <nav className="header__navigation">
                        <ul className="header__navigation__list">
                            <li className="header__navigation__list__element"><a href="#interviews">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Interviews
                            </a></li>
                            <li className="header__navigation__list__element"><a href="#tasting">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Tasting
                            </a></li>
                            <li className="header__navigation__list__element"><a href="#footer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Footer</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        )
    }else{
        return(
            <>
                <header className={active ? "header active__header": "header"}>
                    <div className="header__logo"></div>
                    <div onClick={handleClick} className={active ? "header__hamburger active__hamburger" : "header__hamburger"}>
                        <span className="header__hamburger__element"></span>
                        <span className="header__hamburger__element"></span>
                        <span className="header__hamburger__element"></span>
                    </div>
                </header>
                <nav className={active ? "header__navigation active__navigation" : "header__navigation"}>
                        <ul className="header__navigation__list">
                            <li className="header__navigation__list__element"><a href="#main">Main</a></li>
                            <li className="header__navigation__list__element"><a href="#rums">Rums</a></li>
                            <li className="header__navigation__list__element"><a href="#rums">Events</a></li>
                            <li className="header__navigation__list__element"><a href="#rums">Interviews</a></li>
                            <li className="header__navigation__list__element"><a href="#tasting">Tasting</a></li>
                            <li className="header__navigation__list__element"><a href="#footer">Footer</a></li>
                        </ul>
                </nav>
            </>
        )
    }
}

export default Header;