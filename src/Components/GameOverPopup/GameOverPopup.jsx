import React, {useEffect} from 'react';
import "./GameOverPopup.css"; // Import your styles if needed
import Button from '@mui/material/Button';

function GameOverPopup({ onClose, winner }) {


  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="Title">והמנצח הוא</div>
        <div className="winnerName">{winner}</div>
        <img src="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif" alt="winner gif" />

        <div className="closeBtn">
        <Button variant="outlined" onClick={onClose}> סגור </Button>
        </div>
      </div>
    </div>
  );
}

export default GameOverPopup;
