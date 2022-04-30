import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { SnackbarContext } from '@/context/useSnackbar'

const SnackbarBase = ({ text, type }) => {
  const { closeSnackbar } = React.useContext(SnackbarContext)
  const renderClass = () => {
    if (type === 'success') return 'snackbar snackbarSuccess'
    if (type === 'error') return 'snackbar snackbarError'
  }
  return (
      <div className={renderClass()}>
        {text}
        <button onClick={() => { closeSnackbar() }}>
          <FaTimes />
        </button>
      </div>
  )
}

export default SnackbarBase
