import React, { useState, createContext } from 'react'

const initState = {
  show: false
}

export const BackdropContext = createContext()

export const BackdropProvider = ({ children }) => {
  const [backdropStatus, setBackdropStatus] = useState(initState)

  const openBackdrop = () => {
    setBackdropStatus({
      show: true
    })
  }
  const closeBackdrop = () => {
    setBackdropStatus({
      show: false
    })
  }

  return (
      <BackdropContext.Provider value={{ backdropStatus, openBackdrop, closeBackdrop }}>
        { children }
      </BackdropContext.Provider>
  )
}
