{/*import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
// import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { useGrocerySelection } from '../context/GrocerySelectionContext'

export default function AddItemsPage() {
  const { loaded, selected } = useGrocerySelection()



  const demo = [
    {id: "1"}, {id: "2"}, {id: "3"}
  ]

  return (
    <React.Fragment>
      <h3>Add your grocery to the list</h3>
      <Autocomplete 
        options={demo}
        renderInput={
          (params)=><TextField label={params.label} />
        }
      />
      {/* <ControlPointIcon color="disabled" /> */}

   // </React.Fragment>
  //)
//}
