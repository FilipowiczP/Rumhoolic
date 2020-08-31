import React, {useState} from "react";
import "./events.scss";
import eventContent from "./eventContent";

const Events = () =>{
    const [contentSlider, setContentSlider] = useState(0);

    const handleNext = () => {
        setContentSlider((prevState)=>prevState + 1)
        if(contentSlider >= eventContent.length - 1){
            setContentSlider(0);
        }
        console.log(contentSlider);
    }
    
    const handlePrev = () =>{
        setContentSlider((prevState)=>prevState - 1)
        if(contentSlider === 0){
            setContentSlider(eventContent.length -1);
        }
        console.log(contentSlider);
    }
    if(window.innerWidth >= 1024){
        return(
            <section id="events" className="events">
                <p className="events__slider" onClick={handlePrev}>Poprz<span className="events__color">edni</span></p>
                {eventContent.map(({id, foto, text})=>{
                    return (
                    <div key={id} className={contentSlider === id ? "events__content animate__show" : "events__content animate__hide"}>
                        <img src={foto} alt="foto" className="events__foto" />
                        <div className="events__content__box">
                            <h1 className="events__title">{text.title}</h1>
                            {text.paragraph.map(({paragraph}, i)=>{
                                return <p className="events__text" key={i}>{paragraph}</p>
                            })}
                        </div>
                    </div>
                    )
                })}
                <p className="events__slider" onClick={handleNext}>Kolej<span className="events__color">ne</span></p>
            </section>
        )
    }else{
        return(
            <section id="events" className="events">
                <div className="events__sliders">
                    <p className="events__slider" onClick={handleNext}>Kolej<span className="events__color">ne</span></p>
                    <p className="events__slider" onClick={handlePrev}>Poprz<span className="events__color">edni</span></p>
                </div>
                {eventContent.map(({id, foto, text})=>{
                    return (
                    <div key={id} className={contentSlider === id ? "events__content animate__show" : "events__content animate__hide"}>
                        <img src={foto} alt="foto" className="events__foto" />
                        <div className="events__content__box">
                            <h1 className="events__title">{text.title}</h1>
                            {text.paragraph.map(({paragraph}, i)=>{
                                return <p className="events__text" key={i}>{paragraph}</p>
                            })}
                        </div>
                    </div>
                    )
                })}
                
            </section>
        )
    }
}   

export default Events;