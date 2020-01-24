import React from 'react'
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'

import useStyles from './Style'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { hideToast } from '../../state/actions'
import { RootState } from '../../state/reducers/rootReducer'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const iconVariant = {
  error: ErrorIcon,
  info: InfoIcon
}

const Toast = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const message = useTypedSelector(state => state.toast.message)
  const open = useTypedSelector(state => state.toast.shown)
  const variant = useTypedSelector(state => state.toast.variant)
  const Icon = iconVariant[variant]

  const handleClose = (event: React.SyntheticEvent, reason: string) => {
    if (reason === 'clickaway') { return }
    dispatch(hideToast())
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      ContentProps={{ 'aria-describedby': message }}>

      <SnackbarContent
        className={`${classes[variant]}`}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={`${classes.iconVariant} ${classes.icon}`} />
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  )
}

export default Toast
