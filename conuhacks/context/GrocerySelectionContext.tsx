import React, { useState, useContext, ReactNode } from "react"

// TYPE DEFINITION
export type GroceryItem = {
  id: number,
  value: string
}

export type GrocerySelectionProviderProps = {
  children: ReactNode
}

export type GrocerySelectionContext = {
  loaded: GroceryItem[],  // list of loaded category
  selected: GroceryItem[],  // list of selected category
  addItemToSelected: (id: number)=>void,
  removeItemFromSelected: (id: number)=>void
}

// HOOK
export const useGrocerySelection = () => useContext(GrocerySelectionContext)

// CONTEXT UTILITIES
const GrocerySelectionContext = React.createContext({
  loaded: [],  // list of loaded category
  selected: [],  // list of selected category
  addItemToSelected: ()=>{},
  removeItemFromSelected: ()=>{}
})

export default GrocerySelectionContext

export const GrocerySelectionProvider = ({children}: GrocerySelectionProviderProps) => {
  const [selected, setSelected] = useState<GroceryItem[]>([])
  const [loaded, setLoaded] = useState<GroceryItem[]>([])

  return(
    <GrocerySelectionContext.Provider value={
      {
        // TODO
      }
    }>
      {children}
    </GrocerySelectionContext.Provider>
  )
}