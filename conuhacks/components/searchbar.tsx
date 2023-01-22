import * as React from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import App from "../../backend/app";






const axios = require('axios');

export default function searchBar(){
    const fetchData =async () => {
      const result = await axios ('http://localhost:3001/foods');
      return result;
    }

    const foodOptions= fetchData()
    console.log(foodOptions);
    return(
        
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={foodOptions.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />


    )
} 