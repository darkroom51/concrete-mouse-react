import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

import { AppRoute } from 'routing/AppRoute.enum';
import { useStyles } from './styles';


const LoginButton = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Button 
        variant="outlined" 
        color="secondary"
        onClick={() => {history.push(AppRoute.login)}}
      >
        Log in
      </Button>
    </Box>
  );
}

export default LoginButton;
