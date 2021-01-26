import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFF',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 1 600px',
    minHeight: '344px',
    margin: '0 auto',
  },
  textPrimary: {
    color: '#1A1B1D',
    fontSize: '18px',
    marginBottom: '8px',
  },
  textSecondary: {
    color: '#9194A5',
    fontSize: '14px',
    margin: '0',
  },
}));
