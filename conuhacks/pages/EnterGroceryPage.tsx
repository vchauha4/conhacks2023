import { useGrocerySelection } from '@/context/GrocerySelectionContext'
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

export default function EnterGroceryPage() {
  const { selected, loaded, addItemToSelected, removeItemFromSelected } = useGrocerySelection()

  const demo = [{label: '1'}, {label: '2'}, {label: '3'}]

  return(
    <div>
      <p>Enter your grocery</p>
      <Autocomplete 
        id="loaded-list-searchbar"
        options={demo}
        disableClearable
        renderInput={
          (params) => <TextField {...params} label='Demo' />
        }
      />
    </div>
  )
}