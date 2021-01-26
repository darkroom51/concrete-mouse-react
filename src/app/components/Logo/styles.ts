import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      order: 1,
      marginRight: 'auto',
    },
  },
}));
