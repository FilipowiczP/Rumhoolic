import React, {useState, useEffect} from "react";
import './rums.scss';
import rumContent from "./rumContent";


const Rums = () =>{

    const [boxPosition, setBoxPosition] = useState("-100%");
    const [boxContent, setBoxContent] = useState({})

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
                <p onClick={handleHide} className="rums__info__hide">Wst<span className="hide__color">ecz</span></p>
                <img className="rums__foto" src={boxContent.secondFoto}/>
                <p>{boxContent.content}</p>
            </div>
            {rumContent.map(({id, mainFoto})=>{
                return <img className="rums__content" key={id} src={mainFoto} onClick={(event)=>handleShowBox(event, id)} />
            })}
        </section>
    )
};


export default Rums;