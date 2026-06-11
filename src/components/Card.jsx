import { useState } from "react";

function Card(props) {
    

    let content;

    if (props.flip) {
        content = <p>{props.answer}</p>;
    } 
    else {
        content = <img src={props.img} alt="Card Image" />;
    }
    
  return (
    <div onClick={props.flipCard}>
        {content}
    </div>
  );
}

export default Card;