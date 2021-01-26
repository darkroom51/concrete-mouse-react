import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '32px',
    width: '288px',
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '48%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '24px',
    },
    '&.MuiPaper-elevation1': {
      borderRadius: '8px',
      boxShadow: `
        0px 2px 1px -1px rgba(0,0,0,0.02), 
        0px 1px 1px 0px rgba(0,0,0,0.02), 
        0px 1px 3px 0px rgba(0,0,0,0.02);
      `,
    },
  },
  actionArea: {
    marginBottom: 'auto',
    position: 'relative',
  },
  promoBadge: {
    height: '24px',
    width: '75px',
    position: 'absolute',
    top: '16px',
    color: '#FFF',
    background: '#F9A52B',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: '172px',
  },
  mediaDisabled: {
    filter: 'grayscale(100%)',
    opacity: '.5',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  textPrimary: {
    color: '#1A1B1D',
    fontSize: '18px',
    margin: '0 0 8px',
  },
  textSecondary: {
    color: '#9194A5',
    fontSize: '14px',
    margin: '0',
  },
  rating: {
    padding: '0 0 16px 12px',
    '& span': {
      marginLeft: '4px',
    },
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 16px 24px 16px',
    '& .MuiButton-label': {
      fontSize: '14px',
    },
    '& .MuiButton-root': {
      textTransform: 'none',
    },
    '& .MuiButton-contained': {
      padding: '6px 24px',
      boxShadow: `
        0px 2px 1px -1px rgba(0,0,0,0.02), 
        0px 1px 1px 0px rgba(0,0,0,0.02), 
        0px 1px 3px 0px rgba(0,0,0,0.02);
      `,
    },
    '& .MuiButton-contained.Mui-disabled': {
      color: '#fff',
      background: '#9194A5',
    },
  },
}));
