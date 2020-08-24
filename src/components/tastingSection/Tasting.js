import React, {useEffect, useState} from "react";
import './tasting.scss';
import tastingContent from "./tastingContent.";

const Tasting = () =>{

    const [slider, setSlider] = useState(0)

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            if(tastingContent[0].fotos.length === slider){
                setSlider(0)
            }
            setSlider((slider) => slider + 1)
            console.log(slider);
            
        }, 2000);
        return clearInterval(intervalID);
    },[])

    return(
        <section id="tasting" className="tasting">
            <p className="tasting__slider">Poprz<span className="tasting__color">edni</span></p>
            {tastingContent.map(({id, fotos, text}) =>{
                return (
                    <div className="tasting__content" key={id} data-tasting={id}>
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
            <p className="tasting__slider">Nastę<span className="tasting__color">pny</span></p>
        </section>
    )
}

export default Tasting;