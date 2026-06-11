import React from 'react'
import { useState } from 'react';
import Counter from './components/Counter.jsx'
import './App.css'
import Card from './components/Card.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
  const cards = [
    {
      img: "nangong-yu.jpg",
      answer: "Nangong Yu"
    },
    {
      img: "lucia.jpg",
      answer: "Lucia"
    },
    {
      img: "alice.jpg",
      answer: "Alice"
    },
    {
      img: "yixuan.jpg",
      answer: "Yixuan"
    },
    {
      img: "vivian.jpg",
      answer: "Vivian"
    },
    {
      img: "astra-yao.jpg",
      answer: "Astra Yao"
    },
    {
      img: "evelyn.jpg",
      answer: "Evelyn"
    },
    {
      img: "ellen.jpg",
      answer: "Ellen"
    },
    {
      img: "miyabi.jpg",
      answer: "Miyabi"
    },
    {
      img: "anby.jpg",
      answer: "Anby"
    }
  ];

  const [shuffledCards] = useState(() => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);

    shuffled.push({
      img: "",
      answer: "Congrats! You're Finished!"
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
      setCurrentCard(currentCard + 1);
      setFlipped(false);
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setFlipped(false);
    }
  }

  return (
    <div className="App">
      <h1>ZZZ Guessing Game</h1>
      <p>Guess the Zenless Zone Zero Character Based on the Photo!</p>
      <Counter count={shuffledCards.length - currentCard - 1}/>
      <Card img={shuffledCards[currentCard].img} answer={shuffledCards[currentCard].answer} flip={flipped} flipCard={flipCard}/>
      <Buttons prevCard={prevCard} nextCard={nextCard}></Buttons>
    </div>
  )
}

export default App
