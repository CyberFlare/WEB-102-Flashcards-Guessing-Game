import React from 'react'
import './Button.css'


function Buttons(props) {

  return (
    <div className="Buttons">
        <button onClick={props.prevCard}>{"<-"}</button>
        <button onClick={props.nextCard}>{"->"}</button>
    </div>
  )
}

export default Buttons
