import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
  },
  container: {
    maxWidth: '1320px',
    margin: '0 auto',
    padding: '0 48px',
    height: '144px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      padding: '48px 24px',
      height: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px',
    },
  },
}));
