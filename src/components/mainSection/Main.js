import React from "react";
import './main.scss';
import logo1 from '../rumsSection/images/logo1.1.png'

const Main = () =>{
    return (
        <section id="main" className="main">
            <img src={logo1} alt="logo" className="main__logo"/>
        </section>
    )
}

export default Main;