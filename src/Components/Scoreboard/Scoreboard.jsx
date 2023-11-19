import React from 'react'
import "./Scoreboard.css"

function Scoreboard({ players, whoIsPlaying }) {
  return (
    <div className='Scoreboard'>
        Scoreboard
        <div className='Scoreboard_inner'>
          <div>
              {players[0].playerName}
              {players[0].score}
              {whoIsPlaying[0].nowPlaying && (<div>My turn</div>)}

          </div>
          <div>
              {players[1].playerName}
              {players[1].score}
              {whoIsPlaying[1].nowPlaying && (<div>My turn!</div>)}


          </div>
        </div>
        
    </div>
  )
}

export default Scoreboard