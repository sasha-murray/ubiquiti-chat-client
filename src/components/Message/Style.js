import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#e8e8e8',
    maxWidth: '360px',
    padding: '8px'
  },
  fromYouCard: {
    backgroundColor: '#00a0df'
  },
  message: {
    color: 'black',
    wordWrap: 'break-word'
  },
  messageContainer: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  },
  fromYouMessageContainer: {
    alignSelf: 'flex-end'
  },
  sender: {
    color: 'black',
    fontSize: '1rem'
  }
}))

export default useStyles
