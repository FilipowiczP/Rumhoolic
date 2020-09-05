import React, {useState} from "react";
import './rums.scss';
import rumContent from "./rumContent";

const Rums = () =>{

    const [boxPosition, setBoxPosition] = useState("-100%");
    const [boxContent, setBoxContent] = useState(false)

    const handleShowBox = (events, id) => {
        events.preventDefault();
        setBoxPosition(0);
        for (let i = 0; i <=rumContent.length; i++){
            if(id === rumContent[i].id){
                setBoxContent(rumContent[i])
                break;
            }
        }
    }

    const handleHide = () =>{
        setBoxPosition("-100%")
    }

    return(
        <section id="rums" className="rums">
            <div className="rums__info" style={{left: boxPosition}}>
                <div className="rums__info__shadow"></div>
                <p onClick={handleHide} className="rums__info__hide">Wst<span className="color__hide">ecz</span></p>
                <img className="rums__foto" src={boxContent.secondFoto}/>
                {boxContent && <h1 className="rums__title">{boxContent.text.name}</h1>}
                <p className="rums__text"><span className="rums__text__heading">Coun<span className="color__heading">try: </span></span></p>
                {boxContent && <p className="rums__text">{boxContent.text.country}</p>}
                {boxContent && <p className="rums__text"><span className="rums__text__heading">Aro<span className="color__heading">ma: </span></span></p>}
                {boxContent && <p className="rums__text">{boxContent.text.aroma}</p>}
                {boxContent && <p className="rums__text"><span className="rums__text__heading">Descrip<span className="color__heading">tion: </span></span></p>}
                {boxContent && <p className="rums__text">{boxContent.text.description}</p>}
                {boxContent && <p className="rums__text"><span className="rums__text__heading">Lab<span className="color__heading">el: </span></span></p>}
                {boxContent && <p className="rums__text">{boxContent.text.label}</p>}
                {boxContent && <p className="rums__text"><span className="rums__text__heading">Hist<span className="color__heading">ory: </span></span></p>}
                {boxContent && <p className="rums__text">{boxContent.text.history}</p>}
            </div>
            {rumContent.map(({id, mainFoto})=>{
                return <img className="rums__content" key={id} src={mainFoto} onClick={(event)=>handleShowBox(event, id)} />
            })}
        </section>
    )
};


export default Rums;