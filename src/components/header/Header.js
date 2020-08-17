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
        console.log("xd")
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
                            <li className="header__navigation__list__element"><a href="#">Main</a></li>
                            <li className="header__navigation__list__element"><a href="#">Rums</a></li>
                            <li className="header__navigation__list__element"><a href="#">Tasting</a></li>
                            <li className="header__navigation__list__element"><a href="#">Footer</a></li>
                        </ul>
                </nav>
            </>
        )
    }
}

export default Header;