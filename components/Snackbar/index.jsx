import React from 'react'
import { SnackbarContext } from '@/context/useSnackbar'

const Snackbar = () => {
  const { snackBarStatus, closeSnackbar } = React.useContext(SnackbarContext)
  return (
      <>
        {
          snackBarStatus.show &&
            <div>

            </div>
        }
      </>
  )
}

export default Snackbar
