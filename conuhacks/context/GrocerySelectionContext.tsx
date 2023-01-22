import React, { useState, useContext, ReactNode } from "react"

// TYPE DEFINITION
export type GroceryItem = {
  id: number,
  value: string,
  quantity?: number,
  unit?: string
}

export type GrocerySelectionProviderProps = {
  children: ReactNode
}

export type GrocerySelectionContext = {
  loaded: GroceryItem[],  // list of loaded category
  selected: GroceryItem[],  // list of selected category
  addItemToSelected: (item: GroceryItem)=>void,
  removeItemFromSelected: (id: number)=>void
}

// HOOK
export const useGrocerySelection = () => useContext(GrocerySelectionContext)

// CONTEXT UTILITIES
const GrocerySelectionContext = React.createContext({} as GrocerySelectionContext)

export default GrocerySelectionContext

export const GrocerySelectionProvider = ({children}: GrocerySelectionProviderProps) => {
  const [selected, setSelected] = useState<GroceryItem[]>([])
  const [loaded, setLoaded] = useState<GroceryItem[]>([])

  const addItemToSelected = (item: GroceryItem) => {
    // TODO
    
  }
  const removeItemFromSelected = (id: number) => {
    // TODO
  }

  return(
    <GrocerySelectionContext.Provider value={
      {
        selected, loaded, addItemToSelected, removeItemFromSelected
      }
    }>
      {children}
    </GrocerySelectionContext.Provider>
  )
}