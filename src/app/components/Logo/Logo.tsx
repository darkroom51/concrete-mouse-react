import React from 'react';
import { Link } from 'react-router-dom';
import { Box  } from '@material-ui/core';

import { AppRoute } from 'routing/AppRoute.enum';
import logo from 'assets/join-tsh-io.svg';
import { useStyles } from './styles';


const Logo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link to={AppRoute.home}>
        <img src={logo} alt="Join The Software House" />
      </Link>
    </Box>
  );
}

export default Logo;
