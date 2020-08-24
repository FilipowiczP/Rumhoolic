import React, {useEffect, useState} from "react";
import './tasting.scss';
import tastingContent from "./tastingContent.";

const Tasting = () =>{

    const [slider, setSlider] = useState(0);
    const [contentSlider, setContentSlider] = useState(0);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setSlider(slider => slider + 1);  
            if(tastingContent[0].fotos.length - 2 < slider){
                setSlider(0);
            };
        }, 2000);
        return () => clearInterval(intervalID);
    },[slider])

    const handleNext = () => {
        setContentSlider((prevState)=>prevState + 1)
        if(contentSlider >= tastingContent.length){
            setContentSlider(0);
        }
    }

    const handlePrev = () =>{
        setContentSlider((prevState)=>prevState - 1)
        if(contentSlider <= 0){
            setContentSlider(tastingContent.length);
        }
    }

    return(
        <section id="tasting" className="tasting">
            <p className="tasting__slider" onClick={handlePrev}>Poprz<span className="tasting__color">edni</span></p>
            {tastingContent.map(({id, fotos, text}) =>{
                return (
                    <div className="tasting__content" key={id} data-tasting={id} style={{display: contentSlider == id ? "block" : "none"}}>
                        <h1 className="tasting__title">{text.name}</h1>
                        <div className="tasting__content__box">
                            <img className="tasting__foto" src={fotos[slider]}/>
                        </div>
                        <p className="tasting__text"><span className="tasting__text__heading">Miej<span className="tasting__color">sce:</span></span> {text.place}</p>
                        <p className="tasting__text"><span className="tasting__text__heading">Prowadz<span className="tasting__color">oący:</span></span> {text.leader}</p>
                        <p className="tasting__text"><span className="tasting__text__heading">Degustowane  <span className="tasting__color">rumy:</span></span> {text.rums}</p>
                        <p className="tasting__text"><span className="tasting__text__heading">Moja  <span className="tasting__color">opinia:</span></span> {text.opinion}</p>
                    </div>
                )
            })}
            <p className="tasting__slider" onClick={handleNext}>Nastę<span className="tasting__color">pny</span></p>
        </section>
    )
}

export default Tasting;