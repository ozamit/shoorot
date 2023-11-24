import React from 'react'
import "./Scoreboard.css"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Scoreboard({ players, whoIsPlaying, player1Score, player2Score, sumScorePlayer1, sumScorePlayer2 }) {

  const containerStyle1 = {
    display: 'flex',
    // border: whoIsPlaying && whoIsPlaying[0].nowPlaying ? '1px solid black' : '0px solid black',
    borderRadius: '5px',
    color: 'black',
    fontSize: '30px',
    margin: '0',
    padding: '0',
  };

  const containerStyle2 = {
    // border: whoIsPlaying && whoIsPlaying[1].nowPlaying ? '1px solid black' : '0px solid black',
    borderRadius: '5px',
    color: 'black',
    fontSize: '30px',
    margin: '0',
    padding: '0',
  };

  const iconStyle1 = {
    color: whoIsPlaying && whoIsPlaying[0].nowPlaying ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 0, 0, 0)',
    fontSize: '30px',
  };

  const iconStyle2 = {
    color: whoIsPlaying && whoIsPlaying[1].nowPlaying ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 0, 0, 0)',
    fontSize: '30px',
  };


  return (
    <div className='Scoreboard'>
        
    <div className='Scoreboard_inner'>
      <div>
        <div ><SportsEsportsIcon style={iconStyle1} /></div>
        <div style={containerStyle1}>
        {players[0].playerName}
        </div>
      </div>
      <div className='score'> {sumScorePlayer1} - {sumScorePlayer2} </div>
        <div>
          <div ><SportsEsportsIcon style={iconStyle2} /></div>
          <div style={containerStyle2}>
          {players[1].playerName}
          </div>
      </div>      
    </div>
    </div>
  )
}

export default Scoreboard