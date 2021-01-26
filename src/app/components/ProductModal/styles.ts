import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '8px',
    outline: 'none',
    overflow: 'hidden',
    position: 'relative',
    maxWidth: '600px',
    margin: '24px',
  },
  media: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
    display: 'block',
  },
  content: {
    padding: '32px 32px 56px 32px',
    [theme.breakpoints.down('xs')]: {
      padding: '24px',
    },
  },
  textPrimary: {
    color: '#1A1B1D',
    fontSize: '24px',
    margin: '0 0 8px',
  },
  textSecondary: {
    color: '#9194A5',
    fontSize: '16px',
    margin: '0',
  },
  close: {
    position: 'absolute',
    top: '16px',
    right: '16px',
  },
}));
