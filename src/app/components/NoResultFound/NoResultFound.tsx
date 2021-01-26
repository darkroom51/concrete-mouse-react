import React from 'react';
import { Box } from '@material-ui/core';

import taskIcon from 'assets/no-results-ico.svg';
import { useStyles } from './styles';

const NoResultFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
       <img src={taskIcon} alt="empty result icon" />
       <p className={classes.textPrimary}>Ooops... It's empty here</p>
       <p className={classes.textSecondary}>There are no products on the list</p>
    </Box>
  );
}

export default NoResultFound;
