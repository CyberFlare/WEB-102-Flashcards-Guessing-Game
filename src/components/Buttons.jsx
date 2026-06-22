import React from 'react'
import './Button.css'


function Buttons(props) {

  return (
    <div className="Buttons">
        <button onClick={props.prevCard} disabled={props.isFirst}>{"<-"}</button>
        <button onClick={props.nextCard} disabled={props.isLast}>{"->"}</button>
    </div>
  )
}

export default Buttons
