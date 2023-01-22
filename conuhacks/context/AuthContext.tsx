import React from "react"

const AuthContext = React.createContext({
  auth: {},  // User data - TODO
  login: ()=>{},
  logout: ()=>{},
  registerUser: ()=>{} 
})

default export AuthContext