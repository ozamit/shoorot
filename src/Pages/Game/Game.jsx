import React, { useState, useEffect } from 'react'
import "./Game.css"
import Scoreboard from "../../Components/Scoreboard/Scoreboard"

import Checkbox from '@mui/material/Checkbox';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Game() {

    const [allIds, setAllIds] = useState([]);
    const [players, setPlayers] = useState([
        { playerName: 'player 1, score: ', score: 0, nowPlaying: true},
        { playerName: 'player 2, score: ', score: 0, nowPlaying: false},
      ]);
    const [whoIsPlaying, setWhoIsPlaying] = useState([
        { playerName: 'player 1', nowPlaying: true},
        { playerName: 'player 2', nowPlaying: false},
      ]);      
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
        // console.log("Use effect")
    }, []);

    const handleCheckboxChange = (checkboxName) => {
        setCheckboxState((prevState) => ({
          ...prevState,
          [checkboxName]: !prevState[checkboxName],
        }));
      };

      const theme = createTheme({
        components: {
          MuiCheckbox: {
            styleOverrides: {
              root: {
                "&.Mui-disabled": {
                  color: 'blue', // Change this to the desired color
                },},},},},
      });

      const toggleNowPlaying = () => {
        const updatedPlayers = whoIsPlaying.map((player) => ({
        ...player,
        nowPlaying: !whoIsPlaying.nowPlaying,
        }));
        setWhoIsPlaying(updatedPlayers);
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
                
              const updatedPlayers = [...players];
                updatedPlayers[nowPlayingIndex] = {
                  ...updatedPlayers[nowPlayingIndex],
                  score: updatedPlayers[nowPlayingIndex].score + scoreIncrement,
                  nowPlaying: !updatedPlayers[nowPlayingIndex].nowPlaying
                }
                updatedPlayers[isNotPlayingIndex] = {
                ...updatedPlayers[isNotPlayingIndex],
                    nowPlaying: !updatedPlayers[isNotPlayingIndex].nowPlaying
                };

                console.log("updatedPlayers", updatedPlayers)
                setPlayers(updatedPlayers)
                return updatedPlayers;
          };


        



        const parts = newItem.split('-');
        // console.log("parts: ", parts[0],parts[1],parts[2])
        
        const countFirstPart = countItemsStartWith (allIds, parts[0]);
        const countSecondPart = countMiddleItem (allIds, parts[1]);
        const countLastPart = countItemsEndWith (allIds, parts[2]);
        console.log(`BTN clicked:${newItem}, first item: ${parts[0]}, number of times in DB: ${countFirstPart}`);
        console.log(`BTN clicked:${newItem}, middle item: ${parts[1]}, number of times in DB: ${countSecondPart}`);
        console.log(`BTN clicked:${newItem}, last item: ${parts[2]}, number of times in DB: ${countLastPart}`);
        // console.log(`Number of items: ${parts[1]}: ${countSecondPart}`);
        // console.log(`Number of items: ${parts[2]}: ${countLastPart}`);
        
        const checkIfCompleteFirstShoora = (countFirstPart) => {
            // console.log("checkIfCompleteShoora")
            // console.log("countFirstPart === parts[0]")
            // console.log( parseInt(countFirstPart),"=", parseInt(parts[0]) )
            if ( countFirstPart === parseInt(parts[0]) ) {
                console.log("Complete Shoora!!! The score is", parts[0])
                updateScore(parseInt(parts[0]))
            }
            // else {
            //     const toggleNowPlaying = () => {
            //         const updatedPlayers = players.map((player) => ({
            //         ...player,
            //         nowPlaying: !player.nowPlaying,
            //         }));
            //         setPlayers(updatedPlayers);
            //     };
            //     toggleNowPlaying()
            //     }    
        }
        checkIfCompleteFirstShoora(countFirstPart)

        const checkIfCompleteSecondShoora = (countSecondPart) => {
            // console.log("checkIfCompleteShoora")
            // console.log("countFirstPart === parts[1]")
            // console.log( parseInt(countSecondPart),"=", 11 - (parseInt(parts[1])) )
            if ( countSecondPart === 11 - (parseInt(parts[1])) ) {
                console.log("Complete Shoora!!! The score is", 11 - parts[1])
                updateScore(11 - parts[1])
            } 
            // else {
            //     const toggleNowPlaying = () => {
            //         const updatedPlayers = players.map((player) => ({
            //         ...player,
            //         nowPlaying: !player.nowPlaying,
            //         }));
            //         setPlayers(updatedPlayers);
            //     };
            //     toggleNowPlaying()
            //     }     
        }
        checkIfCompleteSecondShoora(countSecondPart)

        const checkIfCompleteLastShoora = (countLastPart) => {
            // console.log("checkIfCompleteShoora")
            // console.log("countFirstPart === parts[1]")
            // console.log( parseInt(countSecondPart),"=", 11 - (parseInt(parts[1])) )
            if ( countLastPart === 11 - (parseInt(parts[2])) ) {
                console.log("Complete Shoora!!! The score is", 11 - parts[2])
                updateScore(11 - parts[2])
            }
            // else {
            // const toggleNowPlaying = () => {
            //     const updatedPlayers = players.map((player) => ({
            //     ...player,
            //     nowPlaying: !player.nowPlaying,
            //     }));
            //     setPlayers(updatedPlayers);
            // };
            // toggleNowPlaying()
            // } 
        }
        checkIfCompleteLastShoora(countLastPart)

      };


    const countItemsStartWith  = (allIds, targetNumber) => {
            // console.log("targetNumber: ", targetNumber)
        const count = allIds.reduce((accumulator, currentId) => {            
          const [firstPart] = currentId.split('-');
            // console.log("firstPart: ", firstPart)
            // console.log("targetNumber:", targetNumber)

          if (firstPart === targetNumber) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);
            // console.log("count: ", count + 1)
      
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
        // console.log("targetNumber: ", targetNumber)
        const count = allIds.reduce((accumulator, currentId) => {            
            const parts = currentId.split('-');
            // console.log("parts: ", parts[0],parts[1],parts[2])
        // console.log("targetNumber:", targetNumber)

          if (parts[2] === targetNumber) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);
        // console.log("count: ", count + 1)
      
        return count + 1;
      };

  return (
    <div className='Game'>
        <ThemeProvider theme={theme}>
        
        <div><Scoreboard players={players} whoIsPlaying={whoIsPlaying}/></div>
        <div>
            <div className='board'>
                <div className='r1'>
                    <Checkbox id='1-1-1' onChange={() => handleCheckboxChange("checkbox1")} onClick={() => addItem('1-1-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox1} />
                </div>
                <div className='r2'>
                    <Checkbox id='2-1-2' onChange={() => handleCheckboxChange("checkbox2")} onClick={() => addItem('2-1-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox2} />
                    <Checkbox id='2-2-1' onChange={() => handleCheckboxChange("checkbox3")} onClick={() => addItem('2-2-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox3} />
                </div>
                <div className='r3'>
                    <Checkbox id='3-1-3' onChange={() => handleCheckboxChange("checkbox4")} onClick={() => addItem('3-1-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox4} />
                    <Checkbox id='3-2-2' onChange={() => handleCheckboxChange("checkbox5")} onClick={() => addItem('3-2-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox5} />
                    <Checkbox id='3-3-1' onChange={() => handleCheckboxChange("checkbox6")} onClick={() => addItem('3-3-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox6} />
                </div>
                <div className='r4'>
                    <Checkbox id='4-1-4' onChange={() => handleCheckboxChange("checkbox7")} onClick={() => addItem('4-1-4')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox7} />
                    <Checkbox id='4-2-3' onChange={() => handleCheckboxChange("checkbox8")} onClick={() => addItem('4-2-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox8} />
                    <Checkbox id='4-3-2' onChange={() => handleCheckboxChange("checkbox9")} onClick={() => addItem('4-3-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox9} />
                    <Checkbox id='4-4-1' onChange={() => handleCheckboxChange("checkbox10")} onClick={() => addItem('4-4-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox10} />
                </div>
                <div className='r5'>
                    <Checkbox id='5-1-5' onChange={() => handleCheckboxChange("checkbox11")} onClick={() => addItem('5-1-5')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox11} />
                    <Checkbox id='5-2-4' onChange={() => handleCheckboxChange("checkbox12")} onClick={() => addItem('5-2-4')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox12} />
                    <Checkbox id='5-3-3' onChange={() => handleCheckboxChange("checkbox13")} onClick={() => addItem('5-3-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox13} />
                    <Checkbox id='5-4-2' onChange={() => handleCheckboxChange("checkbox14")} onClick={() => addItem('5-4-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox14} />
                    <Checkbox id='5-5-1' onChange={() => handleCheckboxChange("checkbox15")} onClick={() => addItem('5-5-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox15} />
                </div>
                <div className='r6'>
                    <Checkbox id='6-1-6' onChange={() => handleCheckboxChange("checkbox16")} onClick={() => addItem('6-1-6')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox16} />
                    <Checkbox id='6-2-5' onChange={() => handleCheckboxChange("checkbox17")} onClick={() => addItem('6-2-5')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox17} />
                    <Checkbox id='6-3-4' onChange={() => handleCheckboxChange("checkbox18")} onClick={() => addItem('6-3-4')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox18} />
                    <Checkbox id='6-4-3' onChange={() => handleCheckboxChange("checkbox19")} onClick={() => addItem('6-4-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox19} />
                    <Checkbox id='6-5-2' onChange={() => handleCheckboxChange("checkbox20")} onClick={() => addItem('6-5-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox20} />
                    <Checkbox id='6-6-1' onChange={() => handleCheckboxChange("checkbox21")} onClick={() => addItem('6-6-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox21} />
                </div>
                <div className='r7'>
                    <Checkbox id='7-1-7' onChange={() => handleCheckboxChange("checkbox22")} onClick={() => addItem('7-1-7')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox22} />
                    <Checkbox id='7-2-6' onChange={() => handleCheckboxChange("checkbox23")} onClick={() => addItem('7-2-6')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox23} />
                    <Checkbox id='7-3-5' onChange={() => handleCheckboxChange("checkbox24")} onClick={() => addItem('7-3-5')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox24} />
                    <Checkbox id='7-4-4' onChange={() => handleCheckboxChange("checkbox25")} onClick={() => addItem('7-4-4')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox25} />
                    <Checkbox id='7-5-3' onChange={() => handleCheckboxChange("checkbox26")} onClick={() => addItem('7-5-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox26} />
                    <Checkbox id='7-6-2' onChange={() => handleCheckboxChange("checkbox27")} onClick={() => addItem('7-6-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox27} />
                    <Checkbox id='7-7-1' onChange={() => handleCheckboxChange("checkbox28")} onClick={() => addItem('7-7-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox28} />
                </div>
                <div className='r8'>
                    <Checkbox id='8-1-8' onChange={() => handleCheckboxChange("checkbox29")} onClick={() => addItem('8-1-8')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox29} />
                    <Checkbox id='8-2-7' onChange={() => handleCheckboxChange("checkbox30")} onClick={() => addItem('8-2-7')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox30} />
                    <Checkbox id='8-3-6' onChange={() => handleCheckboxChange("checkbox31")} onClick={() => addItem('8-3-6')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox31} />
                    <Checkbox id='8-4-5' onChange={() => handleCheckboxChange("checkbox32")} onClick={() => addItem('8-4-5')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox32} />
                    <Checkbox id='8-5-4' onChange={() => handleCheckboxChange("checkbox33")} onClick={() => addItem('8-5-4')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox33} />
                    <Checkbox id='8-6-3' onChange={() => handleCheckboxChange("checkbox34")} onClick={() => addItem('8-6-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox34} />
                    <Checkbox id='8-7-2' onChange={() => handleCheckboxChange("checkbox35")} onClick={() => addItem('8-7-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox35} />
                    <Checkbox id='8-8-1' onChange={() => handleCheckboxChange("checkbox36")} onClick={() => addItem('8-8-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox36} />
                </div>
                <div className='r9'>
                    <Checkbox id='9-1-9' onChange={() => handleCheckboxChange("checkbox37")} onClick={() => addItem('9-1-9')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox37} />
                    <Checkbox id='9-2-8' onChange={() => handleCheckboxChange("checkbox38")} onClick={() => addItem('9-2-8')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox38} />
                    <Checkbox id='9-3-7' onChange={() => handleCheckboxChange("checkbox39")} onClick={() => addItem('9-3-7')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox39} />
                    <Checkbox id='9-4-6' onChange={() => handleCheckboxChange("checkbox40")} onClick={() => addItem('9-4-6')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox40} />
                    <Checkbox id='9-5-5' onChange={() => handleCheckboxChange("checkbox41")} onClick={() => addItem('9-5-5')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox41} />
                    <Checkbox id='9-6-4' onChange={() => handleCheckboxChange("checkbox42")} onClick={() => addItem('9-6-4')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox42} />
                    <Checkbox id='9-7-3' onChange={() => handleCheckboxChange("checkbox43")} onClick={() => addItem('9-7-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox43} />
                    <Checkbox id='9-8-2' onChange={() => handleCheckboxChange("checkbox44")} onClick={() => addItem('9-8-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox44} />
                    <Checkbox id='9-9-1' onChange={() => handleCheckboxChange("checkbox45")} onClick={() => addItem('9-9-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox45} />
                </div>
                <div className='r10'>
                    <Checkbox id='10-1-10' onChange={() => handleCheckboxChange("checkbox46")} onClick={() => addItem('10-1-10')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox46} />
                    <Checkbox id='10-2-9' onChange={() => handleCheckboxChange("checkbox47")} onClick={() => addItem('10-2-9')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox47} />
                    <Checkbox id='10-3-8' onChange={() => handleCheckboxChange("checkbox48")} onClick={() => addItem('10-3-8')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox48} />
                    <Checkbox id='10-4-7' onChange={() => handleCheckboxChange("checkbox49")} onClick={() => addItem('10-4-7')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox49} />
                    <Checkbox id='10-5-6' onChange={() => handleCheckboxChange("checkbox50")} onClick={() => addItem('10-5-6')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox50} />
                    <Checkbox id='10-6-5' onChange={() => handleCheckboxChange("checkbox51")} onClick={() => addItem('10-6-5')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox51} />
                    <Checkbox id='10-7-4' onChange={() => handleCheckboxChange("checkbox52")} onClick={() => addItem('10-7-4')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox52} />
                    <Checkbox id='10-8-3' onChange={() => handleCheckboxChange("checkbox53")} onClick={() => addItem('10-8-3')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox53} />
                    <Checkbox id='10-9-2' onChange={() => handleCheckboxChange("checkbox54")} onClick={() => addItem('10-9-2')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox54} />
                    <Checkbox id='10-10-1' onChange={() => handleCheckboxChange("checkbox55")} onClick={() => addItem('10-10-1')} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={checkboxState.checkbox55} />
                </div>
            </div>
    </div>
    </ThemeProvider>
    </div>
  )
}

export default Game