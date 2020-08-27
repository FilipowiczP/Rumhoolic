import React, {useEffect, useState} from "react";
import './interview.scss';
import interviews from "./interviewContent";

const Interview = () =>{

    const [contentSlider, setContentSlider] = useState(0);

    const handleNext = () => {
        setContentSlider((prevState)=>prevState + 1)
        if(contentSlider >= interviews.length - 1){
            setContentSlider(0);
        }
    }

    const handlePrev = () =>{
        setContentSlider((prevState)=>prevState - 1)
        if(contentSlider === 0){
            setContentSlider(interviews.length -1);
        }
    }
    if(window.innerWidth >= 1024){
        return(
            <section id="interview" className="interview">
                <p className="interview__slider" onClick={handlePrev}>Poprz<span className="interview__color">edni</span></p>
                {interviews.map(({id, foto, text})=>{
                    return(
                        
                        <div key={id} className={contentSlider == id ? "interview__content animate__show" : "interview__content animate__hide"}>
                            <div className="interview__box">
                                <h1 className="interview__title">{text.title}</h1>
                                <h2 className="interview__text">{text.start}</h2>
                                {text.content.map(({question, answer}, i)=>{
                                    return (
                                        <div key={i}>
                                            <p className="interview__text interview__question ">{question}</p>
                                            <p className="interview__text">{answer}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <img src={foto} alt="foto" className="interview__foto" />
                        </div>
                    )
                })}
                <p className="interview__slider" onClick={handleNext}>Kolej<span className="interview__color">ny</span></p>
            </section>
        )
    }else{
        return(
            <section id="interview" className="interview">
            <p className="interview__slider" onClick={handleNext}>Kolej<span className="interview__color">ny</span></p>
            <p className="interview__slider" onClick={handlePrev}>Poprz<span className="interview__color">edni</span></p>
            {interviews.map(({id, foto, text})=>{
                return(
                    
                    <div key={id} className={contentSlider == id ? "interview__content animate__show" : "interview__content animate__hide"}>
                        <div className="interview__box">
                            <h1 className="interview__title">{text.title}</h1>
                            <p className="interview__text">{text.start}</p>
                            {text.content.map(({question, answer}, i)=>{
                                return (
                                    <div key={i}>
                                        <p className="interview__text interview__question ">{question}</p>
                                        <p className="interview__text">{answer}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <img src={foto} alt="foto" className="interview__foto" />
                    </div>
                )
            })}
            </section>
        )
    }
}

export default Interview;