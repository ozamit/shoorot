// GameOverPopup.js

import React from 'react';
import "./GameOverPopup.css"; // Import your styles if needed

function GameOverPopup({ onClose, winner }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        {/* Add your content for the game over pop-up */}
        <h2>המנצח הוא</h2>
        <h1>{winner} !</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default GameOverPopup;
