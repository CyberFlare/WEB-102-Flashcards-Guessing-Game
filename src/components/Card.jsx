import { useState } from "react";
import "./Card.css";


function Card(props) {
    

    {/*let content;

    if (props.flip) {
        content = <div className="back"><p>{props.answer}</p></div>;
    } 
    else {
        content = <div className="Front"><img src={props.img} alt="Card Image" /></div>;
    }*/}
    
  return (
    <div className="card-container">
        <div className={props.flip ? "Card flipped" : "Card"} onClick={props.flipCard}>
            {/*content*/}
            <div className="front">
                <img src={props.img} alt="Card Image" />
            </div>
            <div className="back">
                <p>{props.answer}</p>
            </div>
        </div>
    </div>
  );
}

export default Card;