import React, { useState, useEffect } from 'react'
import "./Scoreboard.css"

function Scoreboard({ players, whoIsPlaying, player1Score, player2Score, sumScorePlayer1, sumScorePlayer2 }) {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const containerStyle1 = {
    backgroundColor: 'white',
    padding: '5px',
    border: whoIsPlaying && whoIsPlaying[0].nowPlaying ? '1px solid black' : '0px solid black',
    borderRadius: '5px',
    color: 'black',
    fontSize: '30px',
  };

  const containerStyle2 = {
    backgroundColor: 'white',
    padding: '5px',
    border: whoIsPlaying && whoIsPlaying[1].nowPlaying ? '1px solid black' : '0px solid black',
    borderRadius: '5px',
    color: 'black',
    fontSize: '30px',

  };


  return (
    <div className='Scoreboard'>
        
      <div className='Scoreboard_inner'>


    <div style={containerStyle1}>
    {players[0].playerName}
    </div>
    <div className='score'> {sumScorePlayer1} - {sumScorePlayer2} </div>
    <div style={containerStyle2}>
      {players[1].playerName}
    </div>

            
          
    </div>
    </div>
  )
}

export default Scoreboard