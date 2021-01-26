import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

import { useStyles } from './styles';

const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
       <CircularProgress />
    </Box>
  );
}

export default Loading;
