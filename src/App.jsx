import React from 'react'
import { useState } from 'react';
import Counter from './components/Counter.jsx'
import './App.css'
import Card from './components/Card.jsx';
import Buttons from './components/Buttons.jsx';
import Guess from './components/Guess.jsx';
import Shuffle from './components/Shuffle.jsx';
import cards from "./cards";

function App() {

  const [shuffledCards, setShuffledCards] = useState(() => {
    const initial = [...cards];

    initial.push({
      img: "/charImg/congratsAI.jpeg",
      answer: "Congratulations! You did it! You finshed!"
  });

    return initial;
  });

  const [currentCard, setCurrentCard] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const [guess, setGuess] = useState("");

  const [guessStatus, setGuessStatus] = useState("");

  const shuffleDeck = () => {
    const core = cards.slice();
    const shuffledCore = [...core].sort(() => Math.random() - 0.5);

    shuffledCore.push({
      img: "/charImg/congratsAI.jpeg",
      answer: "Congratulations! You did it! You finshed!"
    });

    setShuffledCards(shuffledCore);
    setCurrentCard(0);
    setGuess("");
    setGuessStatus("");
    setFlipped(false);
  }

  const flipCard = () => {
      setFlipped(!flipped);
  }

  const nextCard = () => {
    setGuess("");
    setGuessStatus("");

    if (currentCard < shuffledCards.length - 1) {
      setFlipped(false);
      setTimeout(() => {
        setCurrentCard(currentCard + 1);
      }, 600);
    }
  }

  const prevCard = () => {
    setGuess("");
    setGuessStatus("");

    if (currentCard > 0) {
      setFlipped(false);
      setTimeout(() => {
        setCurrentCard(currentCard - 1);
      },600);
    }
  }

  const handleGuess = (e) => {
    e.preventDefault();

    const guess = e.target.answer.value;

    setGuess(guess);

    if (guess.toLowerCase() === shuffledCards[currentCard].answer.toLowerCase()) {
      setGuessStatus("correct");
    } 
    else {
      setGuessStatus("wrong");
  }
}

  return (
    <div className="App">
      <h1>ZZZ Guessing Game</h1>
      <p>Guess the Zenless Zone Zero Character Based on the Photo!</p>
      {/*<Counter count={shuffledCards.length - currentCard - 1}/>*/}
      <p>Number of Cards: 10</p>
      <div className="CardContainer">
        <Card img={shuffledCards[currentCard].img} answer={shuffledCards[currentCard].answer} flip={flipped} flipCard={flipCard}/>
      </div>
      <Guess handleGuess={handleGuess} guessStatus={guessStatus} guess={guess} setGuess={setGuess} />
      <div className="Buttons">
        <Buttons prevCard={prevCard} nextCard={nextCard} isFirst={currentCard == 0} isLast={currentCard == shuffledCards.length - 1} />
        <Shuffle handleShuffle={shuffleDeck} />
      </div>
    </div>
  )
}

export default App
