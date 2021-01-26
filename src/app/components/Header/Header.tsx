import React from 'react';
import { Grid, Box } from '@material-ui/core';

import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import LoginButton from '../LoginButton/LoginButton';
import { useStyles } from './styles';


const Header = () => {
  const classes = useStyles();

  return (
    <Grid component="header" className={classes.root}>
      <Box className={classes.container}>
        <Logo />
        <Search />
        <LoginButton />
      </Box>
    </Grid>
  );
}

export default Header;
