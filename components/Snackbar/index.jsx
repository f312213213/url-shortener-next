import React from 'react'
import { SnackbarContext } from '@/context/useSnackbar'
import SnackbarBase from './SnackbarBase'

const Snackbar = () => {
  const { snackBarStatus, closeSnackbar } = React.useContext(SnackbarContext)

  React.useEffect(() => {
    const autoHide = setTimeout(() => {
      closeSnackbar()
    }, 3000)
    return () => {
      clearTimeout(autoHide)
    }
  }, [snackBarStatus.identifier])

  return (
      <>
        {
            snackBarStatus.show &&
            <SnackbarBase type={snackBarStatus.type} text={snackBarStatus.content} />
        }
      </>
  )
}

export default Snackbar
