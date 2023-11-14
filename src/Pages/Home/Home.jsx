import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css"
import Button from '@mui/material/Button';

function Home() {

    const navigate = useNavigate();

    function HandleGameClick() {
        console.log('HandleGameClick')
        navigate("/Game")
    }

  return (
    <div className='Home'>
        Home
        <Button onClick={HandleGameClick}>Shoorot</Button>

    </div>
  )
}

export default Home