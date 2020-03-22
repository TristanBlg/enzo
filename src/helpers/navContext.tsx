import React, { useState, createContext } from "react"

export const NavContext = createContext(null)

export const NavProvider = ({ children }) => {
  const [isNavActive, setIsNavActive] = useState(false)
  const [isNavResponsiveActive, setIsNavResponsiveActive] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(false)
  const [isNavResponsive, setIsNavResponsive] = useState(false)

  const store = {
    isNavActive,
    setIsNavActive,
    isNavFixed,
    setIsNavFixed,
    isNavResponsive,
    setIsNavResponsive,
    isNavResponsiveActive,
    setIsNavResponsiveActive,
  }

  return <NavContext.Provider value={store}>{children}</NavContext.Provider>
}
