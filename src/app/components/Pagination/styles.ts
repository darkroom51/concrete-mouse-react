import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0 -16px 0',
    '& .Mui-selected': {
      color: '#4460F7',
      background: 'transparent',
    },
    '& .Mui-selected:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  },
}));
