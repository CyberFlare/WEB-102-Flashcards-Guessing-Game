import React from 'react'
import './Shuffle.css'

function Shuffle(props) {

  return (
    <div className="Shuffle">
        <button onClick={props.handleShuffle}>Shuffle Cards</button>
    </div>
  )
}

export default Shuffle


