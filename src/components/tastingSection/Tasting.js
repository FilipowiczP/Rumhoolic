import React, {useEffect, useState} from "react";
import './tasting.scss';
import tastingContent from "./tastingContent.";

const Tasting = () =>{

    const [slider, setSlider] = useState(0);
    const [contentSlider, setContentSlider] = useState(0);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setSlider(slider => slider + 1);  
            if(tastingContent[contentSlider].fotos.length - 2 < slider){
                setSlider(0);
            };
        }, 2000);
        return () => clearInterval(intervalID);
    },[slider])

    const handleNext = () => {
        setSlider(0);
        setContentSlider((prevState)=>prevState + 1)
        if(contentSlider >= tastingContent.length - 1){
            setContentSlider(0);
        }
    }

    const handlePrev = () =>{
        setSlider(0);
        setContentSlider((prevState)=>prevState - 1)
        if(contentSlider === 0){
            setContentSlider(tastingContent.length -1);
        }
    }
    if(window.innerWidth >= 1024){
        return(
            <section id="tasting" className="tasting">
                <p className="tasting__slider" onClick={handlePrev}>Poprz<span className="tasting__color">edni</span></p>
                {tastingContent.map(({id, fotos, text}) =>{
                    return (
                        <div className={contentSlider === id ? "tasting__content animate__show" : "tasting__content animate__hide"} key={id} data-tasting={id} >
                            <h1 className="tasting__title">{text.name}</h1>
                            <div className="tasting__content__box">
                                <img className="tasting__foto" src={fotos[slider]}/>
                            </div>
                            <p className="tasting__text"><span className="tasting__text__heading">Miej<span className="tasting__color">sce:</span></span></p>
                            <p className="tasting__text">{text.place}</p>
                            <p className="tasting__text"><span className="tasting__text__heading">Prezen<span className="tasting__color">ter:</span></span></p>
                            <p className="tasting__text">{text.leader}</p>
                            <p className="tasting__text"><span className="tasting__text__heading">Degustowane  <span className="tasting__color">rumy:</span></span></p>
                            <p className="tasting__text">{text.rums}</p>                     
                            <p className="tasting__text"><span className="tasting__text__heading">Moja  <span className="tasting__color">opinia:</span></span></p>
                            <p className="tasting__text">{text.opinion}</p>                     
                        </div>
                    )
                })}
                <p className="tasting__slider" onClick={handleNext}>Kolej<span className="tasting__color">ny</span></p>
            </section>
        )
    }else{
        return(
            <section id="tasting" className="tasting">
                <div className="tasting__sliders">
                    <p className="tasting__slider" onClick={handleNext}>Kolej<span className="tasting__color">ny</span></p>
                    <p className="tasting__slider" onClick={handlePrev}>Poprz<span className="tasting__color">edni</span></p>
                </div>
                {tastingContent.map(({id, fotos, text}) =>{
                    return (
                        <div className={contentSlider === id ? "tasting__content animate__show" : "tasting__content animate__hide"} key={id} data-tasting={id} >
                            <h1 className="tasting__title">{text.name}</h1>
                            <div className="tasting__content__box">
                                <img className="tasting__foto" src={fotos[slider]}/>
                            </div>
                            <p className="tasting__text"><span className="tasting__text__heading">Miej<span className="tasting__color">sce:</span></span></p>
                            <p className="tasting__text">{text.place}</p>
                            <p className="tasting__text"><span className="tasting__text__heading">Prezen<span className="tasting__color">ter:</span></span></p>
                            <p className="tasting__text">{text.leader}</p>
                            <p className="tasting__text"><span className="tasting__text__heading">Degustowane  <span className="tasting__color">rumy:</span></span></p>
                            <p className="tasting__text">{text.rums}</p>                     
                            <p className="tasting__text"><span className="tasting__text__heading">Moja  <span className="tasting__color">opinia:</span></span></p>
                            <p className="tasting__text">{text.opinion}</p>      
                        </div>
                    )
                })}
                
            </section>
        )
    }
}

export default Tasting;