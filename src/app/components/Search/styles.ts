import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
    [theme.breakpoints.down('sm')]: {
      order: 3,
      flex: '1 0 100%',
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  searchInput: {
    flex: '0 1 50%',
    marginRight: '24px',
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
      margin: '24px 0 16px',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
    '& .MuiOutlinedInput-input': {
      padding: '16px 14px',
      fontSize: '14px',
    },
  },
  filterCheckbox: {
    '& .MuiFormControlLabel-label': {
      fontSize: '14px',
    },
    '& .MuiCheckbox-root': {
      color: 'rgba(0, 0, 0, 0.34)',
    },
  }
}));
