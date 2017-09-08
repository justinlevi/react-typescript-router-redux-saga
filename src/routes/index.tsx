import * as React from 'react';
import { Route, Switch } from 'react-router';
// import { Route, Switch } from 'react-router-dom';

import About from '../views/About';
import Home from '../views/Home';

export const Routes = () => (
  <div>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);