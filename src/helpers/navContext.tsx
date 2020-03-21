import React, { useState, createContext } from "react"

export const NavContext = createContext(null)

export const NavProvider = ({ children }) => {
  const [isNavActive, setIsNavActive] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(false)

  const store = { isNavActive, setIsNavActive, isNavFixed, setIsNavFixed }

  return <NavContext.Provider value={store}>{children}</NavContext.Provider>
}
