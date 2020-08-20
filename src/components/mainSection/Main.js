import React from "react";
import './main.scss';
import logo1 from './logo1.1.jpg'

const Main = () =>{
    return (
        <section id="main" className="main">
            <img src={logo1} alt="logo" className="main__logo"/>
        </section>
    )
}

export default Main;