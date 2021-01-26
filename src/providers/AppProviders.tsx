import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import store from 'store/store';
import { theme } from './muiTheme';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {children}
      </Router>
    </ThemeProvider>
  </ReduxProvider>
);
