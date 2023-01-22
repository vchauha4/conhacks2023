import React, { useState, useContext, ReactNode } from "react"

// HOOK
export const useGrocerySelection = () => useContext(GrocerySelectionContext)

// CONTEXT UTILITIES
const GrocerySelectionContext = React.createContext({
  loaded: [],  // list of loaded category
  selected: [],  // list of selected category
  addItemToSelected: (id)=>{},
  removeItemFromSelected: (id)=>{}
})

export default GrocerySelectionContext

export const GrocerySelectionProvider = (props) => {
  const [selected, setSelected] = useState([])
  const [loaded, setLoaded] = useState([])

  const addItemToSelected = (id) => {
    // TODO
    
  }
  const removeItemFromSelected = (id) => {
    // TODO
  }

  return(
    <GrocerySelectionContext.Provider value={
      {
        selected, loaded, addItemToSelected, removeItemFromSelected
      }
    }>
      {props.children}
    </GrocerySelectionContext.Provider>
  )
}