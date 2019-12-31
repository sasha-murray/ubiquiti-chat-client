import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#00a0df',
    height: '3.5rem',
    minWidth: '12.5rem'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center'
  },
  form: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    backgroundColor: '#00a0df',
    padding: '10px',
    height: '100px'
  }
}))

export default useStyles
