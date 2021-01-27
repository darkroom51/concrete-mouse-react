/* 
This is only temp view. Please don't look here.
TODO: finish and split to smaller components 
*/

import MotifImage from 'assets/bridge-to-enlightenment.jpg';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#FFF',
    display: 'flex',
  },
  motif: {
    flex: 4,
    backgroundImage: `url(${MotifImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  content: {
    flex: 6,
    padding: '52px 0 52px 126px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: '46px 24px',
    },
  },
  logo: {
    position: 'relative',
    zIndex: 1,
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    margin: '-80px 42px 0 0',
    maxWidth: '500px',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  textTitle: {
    fontSize: '30px',
    marginBottom: '56px',
  },
  formControl: {
    width: '100%',
    marginBottom: '48px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1A1B1D',
    marginTop: '-48px',
  },
  input:{
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
    '& .MuiOutlinedInput-input': {
      padding: '16px 14px',
      fontSize: '14px',
    },
  },
  button: {
    '& .MuiButton-label': {
      fontSize: '16px',
    },
    '&.MuiButton-root': {
      textTransform: 'none',
    },
    '&.MuiButton-contained': {
      padding: '12px',
      boxShadow: `
        0px 2px 1px -1px rgba(0,0,0,0.02), 
        0px 1px 1px 0px rgba(0,0,0,0.02), 
        0px 1px 3px 0px rgba(0,0,0,0.02);
      `,
    },
  },
  resetPassword: {
    display: 'inline-block',
    marginTop: '16px',
    color: '#9194A5',
    transition: 'color .3s ease',
    '&:hover': {
      color: 'rgba(145,148,165,.7)',
    }
  }
}));
