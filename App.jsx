import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const choices = ["rock", "paper", "scissors"];

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [message, setMessage] = useState("");

  const playGame = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
      setMessage("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      setPlayerScore(playerScore + 1);
      setMessage("You win!");
    } else {
      setComputerScore(computerScore + 1);
      setMessage("Computer wins!");
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Rock, Paper, Scissors</h1>
      <p className="score">Your score: {playerScore}</p>
      <p className="score">Computer score: {computerScore}</p>
      <p className="message">{message}</p>
      <div className="button-container">
        <button className="game-button" onClick={() => playGame("rock")}>Rock</button>
        <button className="game-button" onClick={() => playGame("paper")}>Paper</button>
        <button className="game-button" onClick={() => playGame("scissors")}>Scissors</button>
      </div>
    </div>
  );
}

export default App;