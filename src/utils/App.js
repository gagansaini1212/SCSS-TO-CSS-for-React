import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './theme/bulma.css'; // load bulma
import theme, { GlobalStyle } from './theme'; // load custom theme
import { Login, Dashboard } from './pages';

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
