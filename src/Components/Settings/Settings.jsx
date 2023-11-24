import React from 'react'
import "./Settings.css"

import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsIcon from '@mui/icons-material/Settings';
import RefreshIcon from '@mui/icons-material/Refresh';
import BrushIcon from '@mui/icons-material/Brush';


function Settings({ handleCloseSetNames, handleCloseDesignBoard, handleOpenRulesPopup }) {

  const handleRefresh = () => {
    const shouldRefresh = window.confirm('האם אתה בטוח שאתה רוצה להתחיל משחק חדש?');

    if (shouldRefresh) {
      window.location.reload();
    }}

  return (
    <div>
        <div className='settingsWrapper'>
            <IconButton onClick={handleCloseSetNames}>
                <DriveFileRenameOutlineIcon style={{ color: 'black' }}/>
            </IconButton>

            <IconButton onClick={handleCloseDesignBoard}>
                <BrushIcon style={{ color: 'black' }}/>
            </IconButton>
            
            <IconButton onClick={handleOpenRulesPopup}>
                <GavelIcon style={{ color: 'black' }}/>
            </IconButton>
            
            <IconButton onClick={handleRefresh}>
                <RefreshIcon style={{ color: 'black' }}/>
            </IconButton>

        </div>    
    </div>
  )
}

export default Settings