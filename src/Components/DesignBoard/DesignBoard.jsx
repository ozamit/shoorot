import React from 'react';
import "./DesignBoard.css"

import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import IconButton from '@mui/material/IconButton';
import AdjustIcon from '@mui/icons-material/Adjust';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoodIcon from '@mui/icons-material/Mood';
import CameraIcon from '@mui/icons-material/Camera';

const DesignBoard = ({ handleChangeIcon }) => {

  return (
    <div>
        <div className='DesignBoardWrapper'>

        <IconButton onClick={() => handleChangeIcon(0)}>
                <AdjustIcon style={{ color: 'black' }}/>
        </IconButton>
        <IconButton onClick={() => handleChangeIcon(1)}>
                <CoronavirusIcon style={{ color: 'black' }}/>
        </IconButton>
        <IconButton onClick={() => handleChangeIcon(2)}>
                <FavoriteBorderIcon style={{ color: 'black' }}/>
        </IconButton>
        <IconButton onClick={() => handleChangeIcon(3)}>
                <CameraIcon style={{ color: 'black' }}/>
        </IconButton>
        <IconButton onClick={() => handleChangeIcon(4)}>
                <MoodIcon style={{ color: 'black' }}/>
        </IconButton>

        </div>
    </div>
  )
}

export default DesignBoard