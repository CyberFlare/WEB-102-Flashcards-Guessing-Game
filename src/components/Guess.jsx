import React from 'react'
import './Guess.css'

function Guess(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    props.handleGuess(e);
  }

  return (
    <div className="Guess">
        <p>Guess the answer here:</p>
        <form onSubmit={onSubmit}>
            <input name="answer" className={props.guessStatus} value={props.guess || ""} onChange={(e) => props.setGuess(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Guess
