import React, {useState, useEffect} from "react";
import './rums.scss';
import rumContent from "./rumContent";




const Rums = () =>{

    const [boxPosition, setBoxPosition] = useState("-100%");
    useEffect(()=>{
        console.log(rumContent[0])
    })

    const handleClick = () => { //Handler przesuwający boxa
        if(boxPosition === "-100%"){
            setBoxPosition(0);
        }else {
            setBoxPosition("-100%");
        }
    }

    return(
        <section id="rums" className="rums">
            <div className="rums__info" style={{left: boxPosition}}></div>
            {rumContent.map((element, index)=>{
                return <img className="rums__content" key={index} src={element.mainFoto} onClick={handleClick} />
            })}
        </section>
    )
};


export default Rums;