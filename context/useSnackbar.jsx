import React, { useState, createContext } from 'react'

const initState = {
  show: false,
  type: null,
  content: null,
  identifier: Math.random()
}

export const SnackbarContext = createContext()

export const SnackbarProvider = ({ children }) => {
  const [snackBarStatus, setSnackBarStatus] = useState(initState)

  const openSnackbar = (type, content) => {
    setSnackBarStatus({
      show: true,
      type,
      content,
      identifier: Math.random()
    })
  }
  const closeSnackbar = () => {
    setSnackBarStatus(initState)
  }

  return (
      <SnackbarContext.Provider value={{ snackBarStatus, openSnackbar, closeSnackbar }}>
        { children }
      </SnackbarContext.Provider>
  )
}
