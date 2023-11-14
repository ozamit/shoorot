import React, { useState, useEffect } from 'react'
import "./Game.css"
import Scoreboard from "../../Components/Scoreboard/Scoreboard"

import Checkbox from '@mui/material/Checkbox';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Game() {

    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [allIds, setAllIds] = useState([]);
    
    useEffect(() => {
        console.log("Use effect")
            createArrayWithUniqueIDs()
    }, []);
    
        const createArrayWithUniqueIDs = () => {
            const newArray = Array.from({ length: 9 }, (_, index) => ({
                id: index,
                // You can add more properties to each item if needed
                // For example: name: `Item ${index + 1}`
            }
            )
            )
            setAllIds(newArray)
            console.log("allIds", allIds)
            };
    

    function handleCheckboxChange() {
        console.log('Checkbox');
        setIsChecked(!isChecked);
        setIsDisabled(true);
    };

    function handleCheckboxChange1() {
        console.log('Checkbox1');
        // setIsChecked(!isChecked);
        setIsDisabled(true);
    };

  return (
    <div className='Game'>
        
        <div><Scoreboard/></div>
        <div>
            <div className='board'>
                <div className='r1'>
                    <Checkbox onChange={handleCheckboxChange1} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={isDisabled} />
                </div>
                <div className='r2'>
                    <Checkbox onChange={handleCheckboxChange1} {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} disabled={isDisabled} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r3'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r4'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r5'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r6'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r7'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r8'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r9'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
                <div className='r10'>
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                    <Checkbox {...label} icon={<BlurCircularIcon />} checkedIcon={<BrightnessHighIcon />} />
                </div>
            </div>
    </div>
    </div>
  )
}

export default Game