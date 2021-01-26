import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#F2F2F2',
    display: 'flex',
  },
  container: {
    maxWidth: '1320px',
    margin: '0 auto',
    padding: '56px 48px',
    [theme.breakpoints.down('sm')]: {
        padding: '48px 24px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '24px',
    },
  },
  grid: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
}));
