import React from 'react';
import './GameRules.css';

const GameRules = () => {
  return (
    <div className="game-rules-container">
      <h1>How to Play Andar Bahar</h1>
      <ol>
        <li>A single card is placed face up in the center of the table. This card is known as the 'joker' card.</li>
        <li>The dealer then starts dealing cards to the left ('Andar') and right ('Bahar') of the joker card.</li>
        <li>The objective of the game is to predict whether a card of the same rank as the joker card will appear in the Andar side or Bahar side first.</li>
        <li>Players place their bets on either Andar or Bahar before the dealing begins.</li>
        <li>The dealer deals one card to Andar, then one card to Bahar, and continues alternating until a card matching the joker card is dealt.</li>
        <li>If the matching card appears on the side you bet on, you win!</li>
      </ol>
    </div>
  );
};

export default GameRules;
