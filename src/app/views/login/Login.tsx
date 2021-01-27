/* 
This is only temp view. Please don't look here.
TODO: finish and split to smaller components 
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, FormControl, InputLabel, TextField, Button } from '@material-ui/core';

import { AppRoute } from 'routing/AppRoute.enum';
import logo from 'assets/join-tsh-io.svg';
import { useStyles } from './styles';

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Box className={classes.motif} />
      <Box className={classes.content}>
        <Link to={AppRoute.home} className={classes.logo}>
          <img src={logo} alt="Join The Software House" />
        </Link>
        <Box className={classes.loginForm}>
          <h2 className={classes.textTitle}>Login</h2>
          <form>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} htmlFor="login">
                Username
              </InputLabel>
              <TextField
                className={classes.input}
                placeholder="Enter username"
                variant="outlined" 
                name="login" 
                onChange={() => {}}
                fullWidth
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} htmlFor="login">
                Password
              </InputLabel>
              <TextField
                className={classes.input}
                placeholder="Enter password"
                variant="outlined" 
                name="password" 
                type="password"
                onChange={() => {}}
                fullWidth
              />
            </FormControl>

            <Button 
              className={classes.button}
              variant="contained" 
              color="primary" 
              fullWidth
              onClick={() => {}}
            >
              Log in
            </Button>
            <Link to={AppRoute.login} className={classes.resetPassword}>
              Forgot password?
            </Link>
          </form>
        </Box>
      </Box>
    </Grid>
  );
};
