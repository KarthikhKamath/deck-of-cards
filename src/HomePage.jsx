import React, { useEffect, useState } from 'react';
import "./index.css";
import Card from './Components/Card';

function HomePage() {
  const [usedNumbers, setUsedNumbers] = useState([]);
  const [array, setArray] = useState([
    "Clubs-1", "Clubs-2", "Clubs-3", "Clubs-4", "Clubs-5", "Clubs-6", "Clubs-7", "Clubs-8", "Clubs-9", "Clubs-10", "Clubs-King", "Clubs-Queen", "Clubs-Jack",
    "Diamonds-1", "Diamonds-2", "Diamonds-3", "Diamonds-4", "Diamonds-5", "Diamonds-6", "Diamonds-7", "Diamonds-8", "Diamonds-9", "Diamonds-10", "Diamonds-King", "Diamonds-Queen", "Diamonds-Jack",
    "Hearts-1", "Hearts-2", "Hearts-3", "Hearts-4", "Hearts-5", "Hearts-6", "Hearts-7", "Hearts-8", "Hearts-9", "Hearts-10", "Hearts-King", "Hearts-Queen", "Hearts-Jack",
    "Spades-1", "Spades-2", "Spades-3", "Spades-4", "Spades-5", "Spades-6", "Spades-7", "Spades-8", "Spades-9", "Spades-10", "Spades-King", "Spades-Queen", "Spades-Jack",
  ]);

  useEffect(() => {
    generateRandomFive();
  }, []);

  const generateRandomFive = () => {
    const newArray = [...array];
    const fiveNum = [];

    for (let i = 0; i < 5; i++) {
      if (newArray.length === 0) break;
      const randomIndex = Math.floor(Math.random() * newArray.length);
      fiveNum.push(newArray[randomIndex]);
      newArray.splice(randomIndex, 1);
    }

    setArray(newArray);
    setUsedNumbers((prevUsedNumbers) => [...prevUsedNumbers, ...fiveNum]);
  };

  const findNum = (card) => {
    const index = card.indexOf("-");
    return card.slice(index + 1);
  };

  return (
    <div>
      <div className="drawCard">
        <div onClick={generateRandomFive} className="drawText">Draw Card</div>
      </div>
      <div className="Used">Used</div>
      <div className="pickedCards">
        {usedNumbers.map((num, index) => (
          <Card key={`${num}-${index}`} data={num} />
        ))}
      </div>
      <div className="left">Left overs</div>
      <div className="leftCards">
        {array.map((num, index) => (
          <Card key={`${num}-${index}`} data={num} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
