import React, { useState, createContext } from 'react'

const initState = {
  show: false,
  type: null,
  title: null,
  content: null
}

export const SnackbarContext = createContext()

export const SnackbarProvider = ({ children }) => {
  const [snackBarStatus, setSnackBarStatus] = useState(initState)

  const openSnackbar = (type, title, content, onClose) => {
    setSnackBarStatus({
      show: true,
      type,
      title,
      content,
      onClose
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
