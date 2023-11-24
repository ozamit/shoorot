import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SetNames.css"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function SetNames({ handleCloseSetNames, players, setNewName1, setNewName2 }) {
    
    const { control, handleSubmit } = useForm();

    const onSubmit1 = (data) => {
        console.log('Submitted value:', data.inputField);
        setNewName1(data.inputField, 0)
      };

      const onSubmit2 = (data) => {
        console.log('Submitted value:', data.inputField2);
        setNewName2(data.inputField2, 1)
      };

  return (
    <div>
        <div className="setNamesWrapper">

  
    <div>
            <form onSubmit={handleSubmit(onSubmit1)} className="formContainer">
                <label className="label">
                <Controller
                    name="inputField"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField
                        {...field}
                        variant="outlined"
                        label={players[0].playerName}
                        // fullWidth
                        size="small"
                        className="textField"
                        style={{
                            backgroundColor: '#ffffff', // Set the background color
                            border: '1px solid #007272', // Set the border color
                            borderRadius: '10px', // Set the border radius
                          }}
                    />
                    )}
                />
                </label>
                <Button type="submit" variant="contained" color="primary" className="submitButton">
                GO
                </Button>
            </form >
      <form onSubmit={handleSubmit(onSubmit2)} className="formContainer">
        <label className="label">
          <Controller
            name="inputField2"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label={players[1].playerName}
                // fullWidth
                size="small"
                className="textField"
                style={{
                    backgroundColor: '#ffffff', // Set the background color
                    border: '1px solid #007272', // Set the border color
                    borderRadius: '10px', // Set the border radius
                  }}
              />
            )}
          />
        </label>
        <Button type="submit" variant="contained" color="primary"  className="submitButton">
          GO
        </Button>
      </form>
      <div className="closeBtn">
        <Button variant="outlined" onClick={handleCloseSetNames}> סגור </Button>
      </div>
    </div>


        </div>
    </div>
  )
}

export default SetNames