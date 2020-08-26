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

    return(
        <section id="events" className="events">
            <p className="events__slider" onClick={handlePrev}>Poprz<span className="events__color">edni</span></p>
            {eventContent.map(({id, foto, text})=>{
                return (
                <div key={id} className="events__content">
                    <img src={foto} alt="foto" className="events__foto" />
                    <div className="events__content__box">
                        <h1 className="events__title">{text.title}</h1>
                        {text.paragraph.map(({paragraph})=>{
                            return <p className="events__text">{paragraph}</p>
                        })}
                    </div>
                </div>
                )
            })}
            <p className="events__slider" onClick={handleNext}>Nastę<span className="events__color">pny</span></p>
        </section>
    )
}   

export default Events;