import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import "./Game.css"
import Scoreboard from "../../Components/Scoreboard/Scoreboard"
import Settings from "../../Components/Settings/Settings"
import SetNames from "../../Components/SetNames/SetNames"
import GameOverPopup from "../../Components/GameOverPopup/GameOverPopup"
import DesignBoard from "../../Components/DesignBoard/DesignBoard"
import Rules from "../../Components/Rules/Rules"

import SnackbarContent from '@mui/material/SnackbarContent';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import CameraIcon from '@mui/icons-material/Camera';
import Checkbox from '@mui/material/Checkbox';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import AdjustIcon from '@mui/icons-material/Adjust';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoodIcon from '@mui/icons-material/Mood';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Game() {

    const [allIds, setAllIds] = useState([]);
    const [players, setPlayers] = useState([
        { playerName: 'שחקן א' },
        { playerName: 'שחקן ב' },
      ]);

    const [whoIsPlaying, setWhoIsPlaying] = useState([
        { playerName: 'player 1', nowPlaying: true},
        { playerName: 'player 2', nowPlaying: false},
      ]);

      const [player1Score, setPlayer1Score] = useState([0]);  
      const [player2Score, setPlayer2Score] = useState([0]);  

      const [sumScorePlayer1, setSumScorePlayer1] = useState(0); 
      const [sumScorePlayer2, setSumScorePlayer2] = useState(0); 

      const [setNamesOpen, setSetNamesOpen] = useState(false);
      const [designBoardOpen, setDesignBoardOpen] = useState(false);

      const [clicks, setClicks] = useState(0);
      const [gameEnds, setGameEnds] = useState(false);
      const [rulesPopup, setRulesPopup] = useState(false);
      const [winner, setWinner] = useState();

      const [icon1, setIcon1] = useState(0);
      const [checkedIcon, setCheckedIcon] = useState(<BrightnessHighIcon />);

      const [isFullScreen, setIsFullScreen] = useState(false);

    // Open to see all buttons names
    const [checkboxState, setCheckboxState] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
        checkbox10: false,
        checkbox11: false,
        checkbox12: false,
        checkbox13: false,
        checkbox14: false,
        checkbox15: false,
        checkbox16: false,
        checkbox17: false,
        checkbox18: false,
        checkbox19: false,
        checkbox20: false,
        checkbox21: false,
        checkbox22: false,
        checkbox23: false,
        checkbox24: false,
        checkbox25: false,
        checkbox26: false,
        checkbox27: false,
        checkbox28: false,
        checkbox29: false,
        checkbox30: false,
        checkbox31: false,
        checkbox32: false,
        checkbox33: false,
        checkbox34: false,
        checkbox35: false,
        checkbox36: false,
        checkbox37: false,
        checkbox38: false,
        checkbox39: false,
        checkbox40: false,
        checkbox41: false,
        checkbox42: false,
        checkbox43: false,
        checkbox44: false,
        checkbox45: false,
        checkbox46: false,
        checkbox47: false,
        checkbox48: false,
        checkbox49: false,
        checkbox50: false,
        checkbox51: false,
        checkbox52: false,
        checkbox53: false,
        checkbox54: false,
        checkbox55: false,
      });
    
  useEffect(() => {
    // console.log("setNamesOpen", setNamesOpen)
}, []);

useEffect(() => {
  // Apply styles to the wrapper based on the full-screen mode
  const wrapperElement = document.querySelector('.wrapper');
  if (wrapperElement) {
    if (isFullScreen) {
      wrapperElement.style.width = '100%';
      wrapperElement.style.height = '100vh';
      // Add other styles as needed
    } else {
      // Reset styles when exiting full screen
      wrapperElement.style.width = 'auto';
      wrapperElement.style.height = 'auto';
      // Remove other styles as needed
    }
  }
}, [isFullScreen]);

const toggleFullScreen = () => {
  setIsFullScreen(!isFullScreen);
};


  const [open, setOpen] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleClick = (whoIsPlayingNow, score) => {
    setSnackbarMsg( players[whoIsPlayingNow].playerName + " השלים שורה בשווי " + score + " נקודות " + "💃" )
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  

const iconList = [
  <AdjustIcon />,
  <CoronavirusIcon />,
  <FavoriteBorderIcon />,
  <CameraIcon />,
  <MoodIcon />,
];

const handleChangeIcon = (newIconIndex) => {
    console.log("newIconIndex", newIconIndex);
    // console.log("iconList[newIconIndex]", iconList[newIconIndex]);
    setIcon1(newIconIndex);
  };


function sumScoreForPlayer1() {
    const sum = player1Score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // const NewValue = player1Score.reduce((accumulator, currentValue) => currentValue, 0);
    console.log("sum player1Score", sum)
    setSumScorePlayer1(sum)
  }

function sumScoreForPlayer2() {
    const sum = player2Score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // const NewValue = player2Score.reduce((accumulator, currentValue) => currentValue, 0);
    console.log("sum player2Score", sum)
    setSumScorePlayer2(sum)
  }

  const setNewName1 = (newName) => {
    console.log("NewName", newName);
    
    // Update the playerName property using the spread operator
    setPlayers([
      { ...players[0], playerName: newName },
      players[1]
    ]);
  };

  const setNewName2 = (newName) => {
    console.log("NewName", newName);
    
    // Update the playerName property using the spread operator
    setPlayers([
    ...players.slice(0, 1), // Keep the players before the updated one unchanged
    { ...players[1], playerName: newName }
    ]);
  };

    const handleCheckboxChange = (checkboxName) => {
        setCheckboxState((prevState) => ({
          ...prevState,
          [checkboxName]: !prevState[checkboxName],
        }));
      };


    const handleCloseSetNames = () => {
        setSetNamesOpen(!setNamesOpen)
    }
    const handleCloseDesignBoard = () => {
        // console.log('close design board', designBoardOpen)
        setDesignBoardOpen(!designBoardOpen)
    }


      const theme = createTheme({
        components: {
          MuiCheckbox: {
            styleOverrides: {
              root: {

                '& .MuiSvgIcon-root': {
                    width: 35, // Adjust the width as needed
                    height: 35, // Adjust the height as needed
                },
                '&.Mui-disabled': {
                  color: '#FFBD4A',
                  marginRight: 30,
                  marginTop: 20,
                  height: 40,
                  width: 40,
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                },
                '&:not(.Mui-disabled)': {
                  color: '#007272',
                  marginRight: 30,
                  marginTop: 20,
                  height: 40,
                  width: 40,
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'

                },
              },
            },
          },
        },
      });


      const toggleNowPlaying = () => {
        // console.log("whoIsPlaying", whoIsPlaying)
        const updatedPlayers = whoIsPlaying.map((player) => ({...player, nowPlaying: !player.nowPlaying, }));
        // console.log("updated whoIsPlaying ", updatedPlayers)

        setWhoIsPlaying(updatedPlayers);
        countTotalClicks()
    }

    const addItem = (newItem) => {
        setAllIds((prevArray) => [...prevArray, newItem]);
        // console.log("allIds: ", allIds)
        // console.log("newItem: ", newItem)
        toggleNowPlaying()

        const updateScore = (scoreIncrement) => {
            console.log("update Score, scoreIncrement:", scoreIncrement)
              const nowPlayingIndex = players.findIndex((player) => player.nowPlaying);
              const isNotPlayingIndex = players.findIndex((player) => player.nowPlaying === false);

              const whoIsPlayingNow = whoIsPlaying.findIndex((player) => player.nowPlaying);
                // console.log("whoIsPlaying", whoIsPlayingNow)

                if ( whoIsPlayingNow === 0 ) { player1Score.push(scoreIncrement); }
                if ( whoIsPlayingNow === 1 ) { player2Score.push(scoreIncrement); }

                console.log("updatedPlayer1Score: ", player1Score)
                console.log("updatedPlayer2Score: ", player2Score)

                handleClick(whoIsPlayingNow, scoreIncrement)
                
          };

        const parts = newItem.split('-');
        // console.log("parts: ", parts[0],parts[1],parts[2])
        
        const countFirstPart = countItemsStartWith (allIds, parts[0]);
        const countSecondPart = countMiddleItem (allIds, parts[1]);
        const countLastPart = countItemsEndWith (allIds, parts[2]);
        console.log(`BTN clicked:${newItem}, first item: ${parts[0]}, number of times in DB: ${countFirstPart}`);
        console.log(`BTN clicked:${newItem}, middle item: ${parts[1]}, number of times in DB: ${countSecondPart}`);
        console.log(`BTN clicked:${newItem}, last item: ${parts[2]}, number of times in DB: ${countLastPart}`);
        
        const checkIfCompleteFirstShoora = (countFirstPart) => {
            // console.log("checkIfCompleteShoora")
            // console.log("countFirstPart === parts[0]")
            // console.log( parseInt(countFirstPart),"=", parseInt(parts[0]) )
            if ( countFirstPart === parseInt(parts[0]) ) {
                console.log("Complete Shoora!!! The score is", parts[0])
                updateScore(parseInt(parts[0]))
                sumScoreForPlayer1()
                sumScoreForPlayer2()
            } 
        }
        checkIfCompleteFirstShoora(countFirstPart)

        const checkIfCompleteSecondShoora = (countSecondPart) => {
            if ( countSecondPart === 11 - (parseInt(parts[1])) ) {
                console.log("Complete Shoora!!! The score is", 11 - parts[1])
                updateScore(11 - parts[1])
                sumScoreForPlayer1()
                sumScoreForPlayer2()
            }  
        }
        checkIfCompleteSecondShoora(countSecondPart)

        const checkIfCompleteLastShoora = (countLastPart) => {
            if ( countLastPart === 11 - (parseInt(parts[2])) ) {
                console.log("Complete Shoora!!! The score is", 11 - parts[2])
                updateScore(11 - parts[2])
                sumScoreForPlayer1()
                sumScoreForPlayer2()
            }
        }
        checkIfCompleteLastShoora(countLastPart)
      };


    const countItemsStartWith  = (allIds, targetNumber) => {
        const count = allIds.reduce((accumulator, currentId) => {            
          const [firstPart] = currentId.split('-');

          if (firstPart === targetNumber) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);      
        return count + 1;
      };

      const countMiddleItem  = (allIds, targetNumber) => {
        // console.log("targetNumber: ", targetNumber)
        const count = allIds.reduce((accumulator, currentId) => {            
            const parts = currentId.split('-');
            // console.log("parts: ", parts[0],parts[1],parts[2])
        // console.log("targetNumber:", targetNumber)

          if (parts[1] === targetNumber) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);
        // console.log("count: ", count + 1)
      
        return count + 1;
      };

      const countItemsEndWith  = (allIds, targetNumber) => {
        const count = allIds.reduce((accumulator, currentId) => {            
            const parts = currentId.split('-');
          if (parts[2] === targetNumber) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);      
        return count + 1;
      };

      const countTotalClicks = () => {
        const TotalClicks = clicks + 1;
        setClicks(TotalClicks)
        // console.log('TotalClicks:', TotalClicks);
        if (TotalClicks === 55) { handleGameEnd() }
      };

      const handleGameEnd = () => {
        const higherValue = sumScorePlayer1 > sumScorePlayer2 ? players[0].playerName : players[1].playerName;
        setWinner(higherValue)
        // Set the gameEnds state to true when the game ends
        setGameEnds(true);
      };

      const handleOpenRulesPopup = () => {
        setRulesPopup(true);
      };
    
      const handleClosePopup = () => {
        // Set the gameEnds state to false when the pop-up is closed
        setGameEnds(false);
        setRulesPopup(false);
      };


  return (
    <div className="wrapper">
      <div className={`wrapper ${isFullScreen ? 'fullscreen' : ''}`}>
    <div className='Game'>
    <div>
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <SnackbarContent
        style={{ backgroundColor: 'green' }}
        message={snackbarMsg}
        action={action}
      />
    </Snackbar>
    
    </div>

    <div>
      {/* Your main game content */}
      {/* Conditionally render the pop-up */}
      {gameEnds && <GameOverPopup onClose={handleClosePopup} winner={winner}/>}
      {rulesPopup && <Rules onClose={handleClosePopup} />}
    </div>
        <ThemeProvider theme={theme}>
        <div className='leftComp'>

            <img src="https://gcdnb.pbrd.co/images/0EtD8GLnQHLy.png?o=1" alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <Scoreboard players={players} whoIsPlaying={whoIsPlaying} player1Score={player1Score} player2Score={player2Score} sumScorePlayer1={sumScorePlayer1} sumScorePlayer2={sumScorePlayer2}/>
            <Settings handleCloseSetNames={handleCloseSetNames} handleCloseDesignBoard={handleCloseDesignBoard} handleOpenRulesPopup={handleOpenRulesPopup} />
            {/* {setNamesOpen && <SetNames setNewName1={setNewName1} setNewName2={setNewName2} handleCloseSetNames={handleCloseSetNames}/>} */}
        
            <div>
      {/* <CSSTransition
            in={setNamesOpen}
            timeout={200} // Duration of the animation in milliseconds
            classNames="slide" // Class names applied during different states of the animation
            unmountOnExit
      > */}
       {setNamesOpen && <SetNames
          players={players}
          setNewName1={setNewName1}
          setNewName2={setNewName2}
          handleCloseSetNames={handleCloseSetNames}
        />}
        
      {/* </CSSTransition> */}
      {/* <CSSTransition
            in={designBoardOpen}
            timeout={200} // Duration of the animation in milliseconds
            classNames="slide" // Class names applied during different states of the animation
            unmountOnExit
      > */}
          {designBoardOpen && <DesignBoard 
            handleCloseDesignBoard={handleCloseDesignBoard}
            handleChangeIcon={handleChangeIcon}
        />}

      {/* </CSSTransition> */}

    </div>
        
        </div>

        
        <div>
            <div className='board'>
            <div className='FullscreenIcon'>
              <Button variant="outlined" onClick={toggleFullScreen}>Full Screen <FullscreenIcon /> <SwapHorizIcon /> <FullscreenExitIcon /></Button>
            </div>
                <div className='r1'>
                    <Checkbox id='1-1-1' onChange={() => handleCheckboxChange("checkbox1")} onClick={() => addItem('1-1-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox1} />
                </div>
                <div className='r2'>
                    <Checkbox id='2-1-2' onChange={() => handleCheckboxChange("checkbox2")} onClick={() => addItem('2-1-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox2} />
                    <Checkbox id='2-2-1' onChange={() => handleCheckboxChange("checkbox3")} onClick={() => addItem('2-2-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox3} />
                </div>
                <div className='r3'>
                    <Checkbox id='3-1-3' onChange={() => handleCheckboxChange("checkbox4")} onClick={() => addItem('3-1-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox4} />
                    <Checkbox id='3-2-2' onChange={() => handleCheckboxChange("checkbox5")} onClick={() => addItem('3-2-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox5} />
                    <Checkbox id='3-3-1' onChange={() => handleCheckboxChange("checkbox6")} onClick={() => addItem('3-3-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox6} />
                </div>
                <div className='r4'>
                    <Checkbox id='4-1-4' onChange={() => handleCheckboxChange("checkbox7")} onClick={() => addItem('4-1-4')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox7} />
                    <Checkbox id='4-2-3' onChange={() => handleCheckboxChange("checkbox8")} onClick={() => addItem('4-2-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox8} />
                    <Checkbox id='4-3-2' onChange={() => handleCheckboxChange("checkbox9")} onClick={() => addItem('4-3-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox9} />
                    <Checkbox id='4-4-1' onChange={() => handleCheckboxChange("checkbox10")} onClick={() => addItem('4-4-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox10} />
                </div>
                <div className='r5'>
                    <Checkbox id='5-1-5' onChange={() => handleCheckboxChange("checkbox11")} onClick={() => addItem('5-1-5')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox11} />
                    <Checkbox id='5-2-4' onChange={() => handleCheckboxChange("checkbox12")} onClick={() => addItem('5-2-4')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox12} />
                    <Checkbox id='5-3-3' onChange={() => handleCheckboxChange("checkbox13")} onClick={() => addItem('5-3-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox13} />
                    <Checkbox id='5-4-2' onChange={() => handleCheckboxChange("checkbox14")} onClick={() => addItem('5-4-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox14} />
                    <Checkbox id='5-5-1' onChange={() => handleCheckboxChange("checkbox15")} onClick={() => addItem('5-5-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox15} />
                </div>
                <div className='r6'>
                    <Checkbox id='6-1-6' onChange={() => handleCheckboxChange("checkbox16")} onClick={() => addItem('6-1-6')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox16} />
                    <Checkbox id='6-2-5' onChange={() => handleCheckboxChange("checkbox17")} onClick={() => addItem('6-2-5')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox17} />
                    <Checkbox id='6-3-4' onChange={() => handleCheckboxChange("checkbox18")} onClick={() => addItem('6-3-4')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox18} />
                    <Checkbox id='6-4-3' onChange={() => handleCheckboxChange("checkbox19")} onClick={() => addItem('6-4-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox19} />
                    <Checkbox id='6-5-2' onChange={() => handleCheckboxChange("checkbox20")} onClick={() => addItem('6-5-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox20} />
                    <Checkbox id='6-6-1' onChange={() => handleCheckboxChange("checkbox21")} onClick={() => addItem('6-6-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox21} />
                </div>
                <div className='r7'>
                    <Checkbox id='7-1-7' onChange={() => handleCheckboxChange("checkbox22")} onClick={() => addItem('7-1-7')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox22} />
                    <Checkbox id='7-2-6' onChange={() => handleCheckboxChange("checkbox23")} onClick={() => addItem('7-2-6')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox23} />
                    <Checkbox id='7-3-5' onChange={() => handleCheckboxChange("checkbox24")} onClick={() => addItem('7-3-5')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox24} />
                    <Checkbox id='7-4-4' onChange={() => handleCheckboxChange("checkbox25")} onClick={() => addItem('7-4-4')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox25} />
                    <Checkbox id='7-5-3' onChange={() => handleCheckboxChange("checkbox26")} onClick={() => addItem('7-5-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox26} />
                    <Checkbox id='7-6-2' onChange={() => handleCheckboxChange("checkbox27")} onClick={() => addItem('7-6-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox27} />
                    <Checkbox id='7-7-1' onChange={() => handleCheckboxChange("checkbox28")} onClick={() => addItem('7-7-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox28} />
                </div>
                <div className='r8'>
                    <Checkbox id='8-1-8' onChange={() => handleCheckboxChange("checkbox29")} onClick={() => addItem('8-1-8')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox29} />
                    <Checkbox id='8-2-7' onChange={() => handleCheckboxChange("checkbox30")} onClick={() => addItem('8-2-7')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox30} />
                    <Checkbox id='8-3-6' onChange={() => handleCheckboxChange("checkbox31")} onClick={() => addItem('8-3-6')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox31} />
                    <Checkbox id='8-4-5' onChange={() => handleCheckboxChange("checkbox32")} onClick={() => addItem('8-4-5')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox32} />
                    <Checkbox id='8-5-4' onChange={() => handleCheckboxChange("checkbox33")} onClick={() => addItem('8-5-4')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox33} />
                    <Checkbox id='8-6-3' onChange={() => handleCheckboxChange("checkbox34")} onClick={() => addItem('8-6-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox34} />
                    <Checkbox id='8-7-2' onChange={() => handleCheckboxChange("checkbox35")} onClick={() => addItem('8-7-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox35} />
                    <Checkbox id='8-8-1' onChange={() => handleCheckboxChange("checkbox36")} onClick={() => addItem('8-8-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox36} />
                </div>
                <div className='r9'>
                    <Checkbox id='9-1-9' onChange={() => handleCheckboxChange("checkbox37")} onClick={() => addItem('9-1-9')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox37} />
                    <Checkbox id='9-2-8' onChange={() => handleCheckboxChange("checkbox38")} onClick={() => addItem('9-2-8')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox38} />
                    <Checkbox id='9-3-7' onChange={() => handleCheckboxChange("checkbox39")} onClick={() => addItem('9-3-7')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox39} />
                    <Checkbox id='9-4-6' onChange={() => handleCheckboxChange("checkbox40")} onClick={() => addItem('9-4-6')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox40} />
                    <Checkbox id='9-5-5' onChange={() => handleCheckboxChange("checkbox41")} onClick={() => addItem('9-5-5')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox41} />
                    <Checkbox id='9-6-4' onChange={() => handleCheckboxChange("checkbox42")} onClick={() => addItem('9-6-4')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox42} />
                    <Checkbox id='9-7-3' onChange={() => handleCheckboxChange("checkbox43")} onClick={() => addItem('9-7-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox43} />
                    <Checkbox id='9-8-2' onChange={() => handleCheckboxChange("checkbox44")} onClick={() => addItem('9-8-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox44} />
                    <Checkbox id='9-9-1' onChange={() => handleCheckboxChange("checkbox45")} onClick={() => addItem('9-9-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox45} />
                </div>
                <div className='r10'>
                    <Checkbox id='10-1-10' onChange={() => handleCheckboxChange("checkbox46")} onClick={() => addItem('10-1-10')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox46} />
                    <Checkbox id='10-2-9' onChange={() => handleCheckboxChange("checkbox47")} onClick={() => addItem('10-2-9')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox47} />
                    <Checkbox id='10-3-8' onChange={() => handleCheckboxChange("checkbox48")} onClick={() => addItem('10-3-8')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox48} />
                    <Checkbox id='10-4-7' onChange={() => handleCheckboxChange("checkbox49")} onClick={() => addItem('10-4-7')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox49} />
                    <Checkbox id='10-5-6' onChange={() => handleCheckboxChange("checkbox50")} onClick={() => addItem('10-5-6')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox50} />
                    <Checkbox id='10-6-5' onChange={() => handleCheckboxChange("checkbox51")} onClick={() => addItem('10-6-5')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox51} />
                    <Checkbox id='10-7-4' onChange={() => handleCheckboxChange("checkbox52")} onClick={() => addItem('10-7-4')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox52} />
                    <Checkbox id='10-8-3' onChange={() => handleCheckboxChange("checkbox53")} onClick={() => addItem('10-8-3')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox53} />
                    <Checkbox id='10-9-2' onChange={() => handleCheckboxChange("checkbox54")} onClick={() => addItem('10-9-2')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox54} />
                    <Checkbox id='10-10-1' onChange={() => handleCheckboxChange("checkbox55")} onClick={() => addItem('10-10-1')} {...label} icon={iconList[icon1]} checkedIcon={checkedIcon} disabled={checkboxState.checkbox55} />
                </div>
            </div>
    </div>
    </ThemeProvider>
    </div>
    </div>
    </div>
  )
}

export default Game