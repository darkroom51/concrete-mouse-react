import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
    '& .MuiButton-label': {
      fontSize: '14px',
    },
    '& .MuiButton-root': {
      textTransform: 'none',
    },
    '& .MuiButton-outlined': {
      padding: '6px 24px',
    },
  },
}));
