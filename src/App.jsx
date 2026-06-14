import React from 'react'
import { useState } from 'react';
import Counter from './components/Counter.jsx'
import './App.css'
import Card from './components/Card.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
  const cards = [
    {
      img: "src\\charImg\\nangong.png",
      answer: "Nangong Yu"
    },
    {
      img: "src\\charImg\\lucia.png",
      answer: "Lucia"
    },
    {
      img: "src\\charImg\\alice.png",
      answer: "Alice"
    },
    {
      img: "src\\charImg\\yixuan.png",
      answer: "Yixuan"
    },
    {
      img: "src\\charImg\\vivian.png",
      answer: "Vivian"
    },
    {
      img: "src\\charImg\\astra.png",
      answer: "Astra Yao"
    },
    {
      img: "src\\charImg\\evelyn.png",
      answer: "Evelyn"
    },
    {
      img: "src\\charImg\\ellen.png",
      answer: "Ellen"
    },
    {
      img: "src\\charImg\\miyabi.png",
      answer: "Miyabi"
    },
    {
      img: "src\\charImg\\anby.png",
      answer: "Anby"
    }
  ];

  const [shuffledCards] = useState(() => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);

    shuffled.push({
      img: "src\\charImg\\congratsAI.jpeg",
      answer: "Congratulations! You did it! You finshed!"
    });

    return shuffled;
  });

  const [currentCard, setCurrentCard] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
      setFlipped(!flipped);
  }

  const nextCard = () => {
  if (currentCard < shuffledCards.length - 1) {
    setFlipped(false);
    setTimeout(() => {
      setCurrentCard(currentCard + 1); 
    }, 600);
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setFlipped(false);
      setTimeout(() => {
        setCurrentCard(currentCard - 1);
      },600);
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
      <Buttons prevCard={prevCard} nextCard={nextCard}></Buttons>
    </div>
  )
}

export default App
