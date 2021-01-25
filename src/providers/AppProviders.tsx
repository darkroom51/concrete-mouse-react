import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'store/store';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ReduxProvider store={store}>
      <Router>
          {children}
      </Router>
  </ReduxProvider>
);
